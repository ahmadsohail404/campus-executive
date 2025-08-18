// src/app/api/apply/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { google } from "googleapis";

type Payload = {
  name: string;
  email: string;
  college: string;
  phone: string;
  gradYear: "2026" | "2027" | "2028" | "2029";
  website?: string; // honeypot
};

const SHEET_NAME = process.env.GOOGLE_SHEET_NAME || "Applications";

function sanitize(s: string) {
  return (s || "").replace(/\s+/g, " ").trim();
}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Payload;

    // 0) Honeypot
    if (data.website) return NextResponse.json({ ok: true });

    // 1) Validate
    const name = sanitize(data.name);
    const email = sanitize(data.email);
    const college = sanitize(data.college);
    const phone = sanitize(data.phone);
    const gradYear = String(data.gradYear || "");

    if (
      !name ||
      !email ||
      !college ||
      !phone ||
      !/^20(26|27|28|29)$/.test(gradYear)
    ) {
      return NextResponse.json(
        { ok: false, error: "Invalid input" },
        { status: 400 }
      );
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const phoneOk = /^(\+?91[-\s]?)?[6-9]\d{9}$/.test(phone);
    if (!emailOk || !phoneOk) {
      return NextResponse.json(
        { ok: false, error: "Invalid email or phone" },
        { status: 400 }
      );
    }

    // 2) Auth
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!;
    const privateKey = (
      process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || ""
    ).replace(/\\n/g, "\n");
    const spreadsheetId = process.env.GOOGLE_SHEET_ID!;

    if (!clientEmail || !privateKey || !spreadsheetId) {
      return NextResponse.json(
        { ok: false, error: "Server not configured" },
        { status: 500 }
      );
    }

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ version: "v4", auth });

    // 3) Ensure the tab exists
    const meta = await sheets.spreadsheets.get({ spreadsheetId });
    const hasSheet = (meta.data.sheets || []).some(
      (s) => s.properties?.title?.toLowerCase() === SHEET_NAME.toLowerCase()
    );
    if (!hasSheet) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [{ addSheet: { properties: { title: SHEET_NAME } } }],
        },
      });
    }

    // 4) Ensure header row
    const headerRange = `${SHEET_NAME}!A1:F1`;
    const headerGet = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: headerRange,
      majorDimension: "ROWS",
    });
    const headerRow = headerGet.data.values?.[0] || [];
    const wantHeader = [
      "Timestamp (IST)",
      "Name",
      "Email",
      "College",
      "Phone",
      "Graduation Year",
    ];
    const headerMissing = wantHeader.some((h, i) => (headerRow[i] || "") !== h);

    if (headerMissing) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: headerRange,
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [wantHeader] },
      });
    }

    // helper: make a clean IST timestamp like "2025-08-18 14:07:35 IST"
    function istTimestamp() {
      const d = new Date();
      const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour12: false,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).formatToParts(d);

      const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
      return `${map.year}-${map.month}-${map.day} ${map.hour}:${map.minute}:${map.second} IST`;
    }

    // 5) Append the row (anchor at A1, Sheets will insert at the end)
    const now = istTimestamp();
    const values = [[now, name, email, college, phone, gradYear]];
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${SHEET_NAME}!A1`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values },
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    // More helpful error back to the client (and your logs)
    const msg =
      e?.response?.data?.error?.message ||
      e?.errors?.[0]?.message ||
      e?.message ||
      "Unexpected error";
    console.error("Sheets error:", msg);
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}

"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Users,
  Handshake,
  Gift,
  GraduationCap,
  Coins,
  Briefcase,
  Rocket,
  Medal,
  Star,
  Trophy,
  Crown,
  Megaphone,
  ArrowRight,
  Check,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Facebook,
  LifeBuoy,
  ArrowUp,
  Timer,
  Calendar,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
} from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <TopNav />
      <Hero />
      <Ambassadors />
      <Webinar />
      <WhyJoin />
      <Ladder />
      <HowItWorks />
      <EligAndTasks />
      <Apply />
      <Footer />
    </main>
  );
}

/* ---------------- Sticky top nav ---------------- */
function TopNav() {
  const items = [
    { href: "#benefits", label: "Benefits" },
    { href: "#ladder", label: "Ladder" },
    { href: "#process", label: "Process" },
  ];
  return (
    <div className="sticky top-0 z-40 backdrop-blur bg-[hsl(var(--background)/0.7)] border-b">
      <div className="mx-auto sm:px-10 px-4 h-12 flex items-center sm:justify-between justify-center">
        <Link
          href="/"
          className="font-semibold flex justify-center items-center"
        >
          <Image
            src="/logo-light.png"
            alt="Jyesta Logo"
            width={90}
            height={90}
            className="mt-1 mr-4"
          />
          <span className="text-gradient">Jyesta Campus Executive</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          {items.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="opacity-80 hover:opacity-100"
            >
              {i.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="h-[2px] bg-brand-gradient" />
    </div>
  );
}

function SectionTitle({
  badge,
  title,
  subtitle,
}: {
  badge: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs border-[hsl(var(--border)/.6)] bg-[hsl(var(--background)/.7)]">
        {badge}
      </div>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-[hsl(var(--muted-foreground))]">{subtitle}</p>
      )}
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-12">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora" />
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-3 inline-flex items-center rounded-full border px-2.5 py-1 text-xs border-[hsl(var(--border)/.6)] bg-[hsl(var(--background)/.7)]">
            <Sparkles className="h-3.5 w-3.5 mr-1 text-[hsl(var(--primary))]" />
            Pan-India Launch
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Become a{" "}
            <span className="text-gradient">Jyesta Campus Executive</span>
          </h1>

          <p className="mt-4 text-[hsl(var(--muted-foreground))] md:text-lg">
            Be the official face of Jyesta in your college. Host events, grow a
            community, and unlock <strong>stipends, internships & PPO</strong>{" "}
            with a milestone-based ladder.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <div className="mt-8 rounded-2xl p-[1px] bg-brand-gradient">
              <div className="rounded-[calc(theme(borderRadius.xl))] border bg-[hsl(var(--card))] p-4 md:p-6">
                <ApplyForm />
              </div>
            </div>
            <a
              href="#ladder"
              className="inline-flex items-center rounded-md border px-4 py-2 text-sm hover:opacity-90"
            >
              See Perks Ladder
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <Pill icon={ShieldCheck} text="Official Jyesta Program" />
            {/* <Pill icon={Calendar} text="Launch: This Semester" /> */}
            <Pill icon={Users} text="One Executive per College" />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3 max-w-3xl mx-auto">
          <Stat label="Colleges" value="100+" />
          <Stat label="Students Trained" value="5,000+" />
          <Stat label="Online" value="100%" />
        </div>
      </div>

      <svg
        className="block w-full text-[hsl(var(--border)/.6)]"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path fill="currentColor" d="M0,0 L1440,0 L1440,60 L0,0 Z" />
      </svg>
    </section>
  );
}

/* ---------------- CAMPUS AMBASSADORS — GROUP PHOTOS ---------------- */
type GroupPhoto = {
  src: string;
  alt: string;
  caption?: string;
};

const GROUP_PHOTOS: GroupPhoto[] = [
  {
    src: "/ca-1.jpeg",
    alt: "Jyesta Campus Executives",
  },
  {
    src: "/ca-2.jpeg",
    alt: "Jyesta Campus Executives",
  },
  {
    src: "/ca-3.jpeg",
    alt: "Jyesta Campus Executives",
  },
];

function Ambassadors() {
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({
    open: false,
    index: 0,
  });

  const openAt = (i: number) => setLightbox({ open: true, index: i });
  const close = () => setLightbox({ open: false, index: 0 });
  const prev = () =>
    setLightbox((s) => ({
      open: true,
      index: (s.index - 1 + GROUP_PHOTOS.length) % GROUP_PHOTOS.length,
    }));
  const next = () =>
    setLightbox((s) => ({
      open: true,
      index: (s.index + 1) % GROUP_PHOTOS.length,
    }));

  return (
    <section
      id="ambassadors"
      className="py-14 md:py-20 bg-[hsl(var(--muted)/.3)]"
    >
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          badge="Faces of the program"
          title="Our Campus Executives"
          subtitle="Leaders building the Jyesta community across India."
        />

        {/* Two per row on sm+; one per row on mobile */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {GROUP_PHOTOS.map((p, i) => (
            <div
              key={p.src}
              className="group relative rounded-2xl p-[1px] bg-brand-gradient"
            >
              <button
                type="button"
                onClick={() => openAt(i)}
                className="relative w-full overflow-hidden rounded-[calc(theme(borderRadius.xl))] border bg-[hsl(var(--card))] outline-none"
                aria-label={`View photo: ${p.alt}`}
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                  />
                  {/* hover overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[hsl(var(--background)/.55)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="pointer-events-none absolute right-3 bottom-3 inline-flex items-center gap-1 rounded-md border bg-[hsl(var(--background)/.7)] px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="h-3.5 w-3.5" /> View
                  </div>
                </div>

                {/* caption strip */}
                {p.caption && (
                  <div className="flex items-center justify-between px-3 py-2 text-sm">
                    <span className="truncate">{p.caption}</span>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        items={GROUP_PHOTOS}
        open={lightbox.open}
        index={lightbox.index}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </section>
  );
}

function Lightbox({
  items,
  open,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: GroupPhoto[];
  open: boolean;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;
  const item = items[index];

  return (
    <div
      className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 inline-flex items-center rounded-md border px-3 py-2 text-xs bg-[hsl(var(--background)/.7)] hover:opacity-90"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex items-center rounded-md border px-3 py-2 text-xs bg-[hsl(var(--background)/.7)] hover:opacity-90"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center rounded-md border px-3 py-2 text-xs bg-[hsl(var(--background)/.7)] hover:opacity-90"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Image */}
        <div className="relative w-full max-w-5xl h-[70vh]">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain select-none"
            sizes="100vw"
            priority
          />
        </div>

        {/* Caption & actions */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[min(95%,56rem)]">
          <div className="flex items-center justify-between gap-3 rounded-md border bg-[hsl(var(--background)/.8)] px-3 py-2 text-xs">
            <div className="truncate">
              <strong>
                Photo {index + 1} / {items.length}:
              </strong>{" "}
              <span className="truncate">{item.caption || item.alt}</span>
            </div>
            <a
              href={item.src}
              download
              className="inline-flex items-center gap-1 rounded-md border px-2 py-1 hover:opacity-90"
            >
              <Download className="h-3.5 w-3.5" /> Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- FREE WEBINAR / MASTERCLASS ---------------- */
function Webinar() {
  // friendly date string for “Registration closes Sun, 24 Aug 11:59 PM IST”
  const { label, targetMs } = useMemo(() => {
    const target = getNextSundayISTEndMs();
    const label = getISTClosingLabel(target);
    return { label, targetMs: target };
  }, []);

  return (
    <section id="webinar" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-aurora opacity-30"
        aria-hidden
      />
      <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
        <div className="rounded-2xl p-[1px] bg-brand-gradient">
          <div className="rounded-[calc(theme(borderRadius.xl))] border bg-[hsl(var(--card))]">
            <div className="p-4 md:p-6 grid gap-6 md:grid-cols-[1.2fr_1fr] items-center">
              {/* Left: details */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-[hsl(var(--border)/.6)] bg-[hsl(var(--background)/.7)] font-bold">
                  <Sparkles className="h-5 w-5 text-[hsl(var(--primary))]" />
                  FREE MASTERCLASS
                </div>

                <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
                  Launch your career with <br />
                  <span className="text-gradient">Jyesta Corporate</span> & Earn
                  Perks
                </h3>

                <ul className="mt-4 space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
                  <li className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-[hsl(var(--primary))] mt-0.5" />
                    <span>{label}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-[hsl(var(--primary))] mt-0.5" />
                    <span>Limited seats • Live Q&A with mentors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="h-4 w-4 text-[hsl(var(--primary))] mt-0.5" />
                    <span>Certificate of Participation (free)</span>
                  </li>
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a href="#" className="btn-aurora">
                    Apply for Free <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#ladder"
                    className="inline-flex items-center rounded-md border px-4 py-2 text-sm hover:opacity-90"
                  >
                    See Perks Ladder
                  </a>
                </div>

                {/* urgency ticker */}
                <div className="mt-4 text-xs">
                  <div className="inline-flex items-center gap-2 rounded-full border px-2.5 py-1 border-[hsl(var(--border)/.6)] bg-[hsl(var(--background)/.7)]">
                    <Timer className="h-3.5 w-3.5 text-[hsl(var(--destructive))]" />
                    Hurry! registrations close soon!
                  </div>
                </div>
              </div>

              {/* Right: countdown */}
              <div className="rounded-xl border bg-[hsl(var(--background)/.6)] p-4 text-center">
                <div className="text-sm font-medium text-[hsl(var(--muted-foreground))]">
                  Registration ends in
                </div>
                <Countdown targetMs={targetMs} />
                <div className="mt-3 text-xs text-[hsl(var(--muted-foreground))]">
                  Sunday • 11:59 PM IST
                </div>
              </div>
            </div>

            {/* bottom urgency bar */}
            <div className="h-1 bg-brand-gradient animate-pulse" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Countdown to Sunday 11:59 PM IST */

function Countdown({ targetMs }: { targetMs: number }) {
  const [remaining, setRemaining] = useState(() =>
    Math.max(0, targetMs - Date.now())
  );

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((prev) => {
        const next = targetMs - Date.now();
        return next <= 0 ? 0 : next;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  const { d, h, m, s } = msToDHMS(remaining);

  return (
    <div className="mt-2 grid grid-cols-4 gap-2">
      <TimeCell label="Days" value={d} />
      <TimeCell label="Hrs" value={h} />
      <TimeCell label="Min" value={m} />
      <TimeCell label="Sec" value={s} />
    </div>
  );
}

function TimeCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border px-2 py-3 bg-[hsl(var(--card))]">
      <div className="text-2xl font-semibold leading-none">{value}</div>
      <div className="mt-1 text-[10px] uppercase tracking-wide text-[hsl(var(--muted-foreground))]">
        {label}
      </div>
    </div>
  );
}

/* ---------- Time helpers (IST aware) ---------- */
const IST_OFFSET_MIN = 330; // +05:30

function getNextSundayISTEndMs(now = new Date()): number {
  const offsetMs = IST_OFFSET_MIN * 60 * 1000;

  // Shift "now" into IST by adding IST offset; then use UTC getters on the shifted date.
  const istNowMs = now.getTime() + offsetMs;
  const istNow = new Date(istNowMs);

  const dow = istNow.getUTCDay(); // 0=Sun,1=Mon,...
  const addDays = 0 <= dow && dow <= 6 ? (7 - dow) % 7 : 0; // days until next Sunday; if Sunday, =0 (today)

  // Build a date representing (IST) next Sunday's 23:59:59.999 using UTC fields of the shifted date
  const istY = istNow.getUTCFullYear();
  const istM = istNow.getUTCMonth();
  const istD = istNow.getUTCDate() + addDays;

  // This is "23:59:59.999" in IST calendar; convert to UTC by subtracting offset
  const sundayEndISTasUTC =
    Date.UTC(istY, istM, istD, 23, 59, 59, 999) - offsetMs;

  // If already past this Sunday (edge case when user opens right after midnight calc), push by 7d
  const target =
    sundayEndISTasUTC <= now.getTime()
      ? sundayEndISTasUTC + 7 * 24 * 60 * 60 * 1000
      : sundayEndISTasUTC;

  return target;
}

function getISTClosingLabel(targetMs: number): string {
  const d = new Date(targetMs);
  // Format in IST
  const parts = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    day: "2-digit",
    month: "short",
  }).formatToParts(d);
  const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
  return `Registration closes ${map.weekday}, ${map.day} ${map.month} • 11:59 PM IST`;
}

function msToDHMS(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return {
    d: String(d).padStart(2, "0"),
    h: String(h).padStart(2, "0"),
    m: String(m).padStart(2, "0"),
    s: String(s).padStart(2, "0"),
  };
}

function Pill({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs border-[hsl(var(--border))] bg-[hsl(var(--background)/.7)]">
      <Icon className="h-3.5 w-3.5 text-[hsl(var(--primary))]" />
      {text}
    </span>
  );
}
function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border p-3 border-[hsl(var(--border)/.6)] bg-[hsl(var(--background)/.7)]">
      <div className="text-2xl md:text-3xl font-semibold text-gradient">
        {value}
      </div>
      <div className="text-xs font-medium text-[hsl(var(--muted-foreground))]">
        {label}
      </div>
    </div>
  );
}

/* ---------------- Why Join ---------------- */
function WhyJoin() {
  const items = [
    {
      icon: Handshake,
      title: "Exclusive Campus Executive",
      desc: "Official Jyesta representative in your college.",
    },
    {
      icon: Gift,
      title: "Milestone Goodies",
      desc: "Branded tee, stickers, merch as you hit targets.",
    },
    {
      icon: GraduationCap,
      title: "Industry Expert Sessions",
      desc: "Pre-placement talks, mock interviews, workshops.",
    },
    {
      icon: Coins,
      title: "Performance Incentives",
      desc: "Coupons, bonuses, stipends up to ₹15,000.",
    },
    {
      icon: Users,
      title: "Career Growth Community",
      desc: "Mentors, peers, nation-wide network.",
    },
    {
      icon: Briefcase,
      title: "Exclusive Job Access",
      desc: "Early access to jobs & internships.",
    },
    {
      icon: Rocket,
      title: "Student Chapter Program",
      desc: "Early entry into Campus Chapter leadership.",
    },
    {
      icon: ShieldCheck,
      title: "Certificates & LoRs",
      desc: "Certificates & LoRs for top performers.",
    },
    {
      icon: Medal,
      title: "Projects, Internships & PPO",
      desc: "Real-world projects & PPO for top performers.",
    },
  ];
  return (
    <section id="benefits" className="py-14 md:py-20 bg-[hsl(var(--muted)/.3)]">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          badge="Why join"
          title="Unlock Career-Boosting Benefits and Stipends"
          subtitle="Tailored for students from 1st year to final year."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl p-[1px] bg-brand-gradient">
              <div className="h-full rounded-[calc(theme(borderRadius.xl))] border bg-[hsl(var(--card))]">
                <div className="p-4">
                  <div className="flex items-center gap-3 text-base font-semibold">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
                      <Icon className="h-5 w-5" />
                    </span>
                    {title}
                  </div>
                  <div className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
                    {desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Ladder ---------------- */
function Ladder() {
  const tiers = [
    {
      tone: "bronze",
      icon: Star,
      title: "Bronze",
      unlock: "5+ referrals",
      bullets: [
        "Campus Executive badge",
        "Certificate of Appreciation",
        "Exclusive Workshops",
        "Community access",
        "Access to latest job opportunities",
      ],
    },
    {
      tone: "silver",
      icon: Trophy,
      title: "Silver",
      unlock: "15+ referrals",
      bullets: [
        "Everything in Bronze",
        "Coupon worth ₹4,500",
        "FREE Career starter kit",
        "Letter of Recommendation",
        "Invite to industry expert session",
      ],
    },
    {
      tone: "gold",
      icon: Crown,
      title: "Gold",
      unlock: "30+ referrals",
      bullets: [
        "Leadership: Establish Student Chapter",
        "Coupon worth ₹9,000",
        "Merch kit: Hoodies, Stickers",
        "Priority internship offers",
        "Website & socials spotlight",
      ],
    },
    {
      tone: "platinum",
      icon: Rocket,
      title: "Platinum",
      unlock: "50+ referrals",
      bullets: [
        "Competitive Stipend",
        "PPO consideration (eligibility-based)",
        "High-value goodies (Headphones/Kindle/etc.)",
        "A free visit to Jyesta's Office",
        "Lead regional CA teams",
      ],
    },
  ] as const;

  const toneRing: Record<string, string> = {
    bronze:
      "from-[rgba(205,127,50,.55)] to-[rgba(205,127,50,.2)] dark:from-[rgba(205,127,50,.75)] dark:to-[rgba(205,127,50,.35)]",
    silver:
      "from-[rgba(192,192,192,.55)] to-[rgba(192,192,192,.2)] dark:from-[rgba(192,192,192,.75)] dark:to-[rgba(192,192,192,.35)]",
    gold: "from-[rgba(212,175,55,.55)] to-[rgba(212,175,55,.22)] dark:from-[rgba(212,175,55,.75)] dark:to-[rgba(212,175,55,.35)]",
    platinum:
      "from-[rgba(142,197,252,.55)] to-[rgba(224,195,252,.25)] dark:from-[rgba(142,197,252,.75)] dark:to-[rgba(224,195,252,.35)]",
  };

  return (
    <section id="ladder" className="py-14 md:py-20 relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora opacity-60" />
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          badge="Gamified Growth"
          title="Milestone-based Perks Ladder"
          subtitle="Clear path → join → hit targets → unlock bigger rewards."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {tiers.map((t) => (
            <div
              key={t.title}
              className={`rounded-2xl p-[1px] bg-gradient-to-br ${
                toneRing[t.tone]
              }`}
            >
              <div className="h-full rounded-[calc(theme(borderRadius.xl))] border bg-[hsl(var(--card))]">
                <div className="p-4">
                  <div className="flex items-center gap-3 text-base font-semibold">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
                      <t.icon className="h-5 w-5" />
                    </span>
                    {t.title}
                  </div>
                  <p className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">
                    Unlocked at: {t.unlock}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
                    {t.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 hidden lg:block">
          <div className="h-2 w-full rounded-full bg-[hsl(var(--secondary))] relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-gradient animate-pulse" />
          </div>
          <div className="mt-2 text-center text-xs text-[hsl(var(--muted-foreground))]">
            Grow with performance • More impact = more perks
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */
function HowItWorks() {
  const steps = [
    {
      n: 1,
      title: "Apply for Free",
      desc: "Tell us about you and your campus reach.",
    },
    {
      n: 2,
      title: "Onboard",
      desc: "Finish short training and get started.",
    },
    {
      n: 3,
      title: "Activate",
      desc: "Run events, share updates, bring referrals, earn rewards.",
    },
    {
      n: 4,
      title: "Lead a Chapter",
      desc: "Hit milestones to establish an official Jyesta Student Chapter.",
    },
  ];
  return (
    <section id="process" className="py-14 md:py-20 bg-[hsl(var(--muted)/.3)]">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle badge="Simple flow" title="How it works" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-xl border bg-[hsl(var(--card))] p-4 hover:shadow-sm"
            >
              <div className="flex items-center justify-between text-base font-semibold">
                {s.title}
                <span className="rounded-full bg-[hsl(var(--primary)/.1)] px-2 py-0.5 text-xs text-[hsl(var(--primary))]">
                  {s.n}/4
                </span>
              </div>
              <div className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Eligibility & Tasks ---------------- */
function EligAndTasks() {
  return (
    <section className="py-14 md:py-20 relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora opacity-40" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 lg:grid-cols-2">
          <GradientCard
            title="Eligibility"
            items={[
              "Undergraduate student in Engineering or Management",
              "Active in campus activities with strong communication skills",
              "Able to dedicate a few hours weekly alongside academics",
              "Only one Campus Executive per college across India",
            ]}
          />
          <GradientCard
            title="What you’ll do"
            items={[
              "Share program updates with classmates and student groups",
              "Assist peers with your unique referral link or code",
              "Gather feedback to enhance outreach efforts",
              "Submit monthly reports to achieve milestones",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
function GradientCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl p-[1px] bg-brand-gradient">
      <div className="rounded-[calc(theme(borderRadius.xl))] border bg-[hsl(var(--card))] p-4">
        <div className="text-base font-semibold flex items-center gap-2">
          {title === "Eligibility" ? (
            <ShieldCheck className="h-5 w-5 text-[hsl(var(--primary))]" />
          ) : (
            <Megaphone className="h-5 w-5 text-[hsl(var(--primary))]" />
          )}
          {title}
        </div>
        <ul className="mt-3 space-y-2 text-sm">
          {items.map((line) => (
            <li
              key={line}
              className="flex items-start gap-2 text-[hsl(var(--muted-foreground))]"
            >
              <Check className="h-4 w-4 mt-0.5 text-[hsl(var(--primary))]" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------------- APPLY (New) ---------------- */
function Apply() {
  return (
    <section id="apply" className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-brand-gradient opacity-15 blur-2xl" />
      <div className="mx-auto max-w-3xl px-4">
        <SectionTitle
          badge="Apply for Free"
          title="Join the Campus Executive program"
          subtitle="Fill this quick form. We’ll reach out within a few days."
        />
        <div className="w-full flex justify-center mt-5">
          <a href="#apply" className="btn-aurora">
            Apply for Free <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ApplyForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErr(null);
    setOk(null);

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: (fd.get("name") as string)?.trim(),
      email: (fd.get("email") as string)?.trim(),
      college: (fd.get("college") as string)?.trim(),
      phone: (fd.get("phone") as string)?.trim(),
      gradYear: fd.get("gradYear") as string as
        | "2026"
        | "2027"
        | "2028"
        | "2029",
      website: (fd.get("website") as string) || "", // honeypot
    };

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json?.ok) {
        throw new Error(json?.error || "Submission failed");
      }
      setOk(true);
      (e.target as HTMLFormElement).reset();
    } catch (e: any) {
      setOk(false);
      setErr(e?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {/* honeypot */}
      <input
        type="text"
        name="website"
        aria-hidden="true"
        tabIndex={-1}
        className="hidden"
      />

      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Full Name" htmlFor="name" required>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            placeholder="Enter your name"
          />
        </Field>

        <Field label="Email" htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            placeholder="Enter your college email"
          />
        </Field>

        <Field
          label="College Name"
          htmlFor="college"
          required
          className="md:col-span-2"
        >
          <input
            id="college"
            name="college"
            required
            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            placeholder="Enter your college name"
          />
        </Field>

        <Field label="Phone (India)" htmlFor="phone" required>
          <input
            id="phone"
            name="phone"
            inputMode="tel"
            required
            pattern="^(\+?91[-\s]?)?[6-9]\d{9}$"
            title="Enter a valid Indian mobile number"
            className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            placeholder="Enter your phone number"
          />
        </Field>

        <Field label="Graduation Year" required>
          <div className="grid grid-cols-4 gap-2">
            {(["2026", "2027", "2028", "2029"] as const).map((y) => (
              <label
                key={y}
                className="flex items-center justify-center gap-2 rounded-md border px-3 py-2 cursor-pointer hover:bg-[hsl(var(--secondary))]"
              >
                <input
                  type="radio"
                  name="gradYear"
                  value={y}
                  required
                  className="accent-[hsl(var(--primary))]"
                />
                <span className="text-sm">{y}</span>
              </label>
            ))}
          </div>
        </Field>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-aurora w-full justify-center disabled:opacity-60 cursor-pointer"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>

      {ok && (
        <div className="rounded-md border px-3 py-2 text-sm bg-[hsl(var(--secondary))]">
          ✅ Thanks! Your application is recorded. We’ll reach out soon.
        </div>
      )}
      {ok === false && (
        <div className="rounded-md border px-3 py-2 text-sm bg-[hsl(var(--destructive)/.08)] text-[hsl(var(--destructive))]">
          {err || "Something went wrong. Please try again."}
        </div>
      )}

      <p className="text-xs text-[hsl(var(--muted-foreground))]">
        By submitting, you agree to be contacted by Jyesta regarding the Campus
        Executive program.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
  className,
}: {
  label: string;
  htmlFor?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1 block text-sm font-medium">
        {label}
        {required && <span className="text-[hsl(var(--destructive))]"> *</span>}
      </label>
      {children}
    </div>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t relative">
      {/* brand stripe */}
      <div className="h-1 bg-brand-gradient" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Top grid */}
        <div className="grid gap-10 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 items-start">
          {/* Brand / blurb */}
          <div>
            <div className="text-lg font-semibold">
              <span className="text-gradient">Jyesta Campus Mitra</span>
            </div>
            <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))]">
              Become the official face of Jyesta in your college. Host events,
              grow a community, and unlock stipends, internships & PPO via our
              milestone-based ladder.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-medium">Quick Links</div>
            <ul className="mt-3 space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
              <li>
                <a className="hover:underline" href="#benefits">
                  Benefits
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#ladder">
                  Perks Ladder
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#process">
                  How it works
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#apply">
                  Apply
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / address */}
          <div>
            <div className="font-medium">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[hsl(var(--primary))]" />
                <a className="hover:underline" href="mailto:support@jyesta.com">
                  support@jyesta.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[hsl(var(--primary))]" />
                <a className="hover:underline" href="tel:+916360584544">
                  +91 63605 84544
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-[hsl(var(--primary))]" />
                <span>
                  BHIVE Premium Workspace, AKR Tech Park, Hosur Rd, Bengaluru,
                  Karnataka 560068
                </span>
              </li>
            </ul>
          </div>

          {/* Help card */}
          <div className="rounded-2xl p-[1px] bg-brand-gradient">
            <div className="rounded-[calc(theme(borderRadius.xl))] border bg-[hsl(var(--card))] p-4">
              <div className="flex items-center gap-2 font-semibold">
                <LifeBuoy className="h-5 w-5 text-[hsl(var(--primary))]" />
                Need help?
              </div>
              <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
                Stuck or have questions about the program or application? Our
                team replies quickly.
              </p>
              <div className="mt-3 flex flex-col sm:flex-row gap-2">
                <a
                  href="mailto:support@jyesta.com"
                  className="btn-aurora w-full sm:w-auto justify-center"
                >
                  Email Support
                </a>
                <a
                  href="tel:+916360584544"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-md border px-4 py-2 text-sm hover:opacity-90"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Socials */}
          <div className="flex items-center gap-3 text-[hsl(var(--muted-foreground))]">
            <a
              href="https://www.instagram.com/jyesta_corporate/"
              aria-label="Instagram"
              className="hover:opacity-90"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/jyesta-corporate-entity"
              aria-label="LinkedIn"
              className="hover:opacity-90"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCb9P3srd73y3-BfVls-7h7Q"
              aria-label="YouTube"
              className="hover:opacity-90"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/jyestacorporate"
              aria-label="Twitter / X"
              className="hover:opacity-90"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/people/Jyesta-Corporate-Entity/61569878710843/"
              aria-label="Facebook"
              className="hover:opacity-90"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-xs hover:opacity-90 self-start sm:self-auto"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" /> Back to top
          </button>
        </div>

        <div className="mt-4 text-center text-xs text-[hsl(var(--muted-foreground))]">
          © {year} Jyesta. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

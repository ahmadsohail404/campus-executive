"use client";

import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Calendar,
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
} from "lucide-react";

export default function Page() {
  return (
    <main>
      <Hero />
      <WhyJoin />
      <Ladder />
      <HowItWorks />
      <EligAndTasks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
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
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-3 inline-flex items-center rounded-full border px-2.5 py-1 text-xs border-[hsl(var(--border)/.6)] bg-[hsl(var(--background)/.7)]">
            <Sparkles className="h-3.5 w-3.5 mr-1 text-[hsl(var(--primary))]" />
            Pan-India Launch
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Become a <span className="text-gradient">Jyesta Campus Mitra</span>
          </h1>

          <p className="mt-4 text-[hsl(var(--muted-foreground))] md:text-lg">
            Be the official face of Jyesta in your college. Host events, grow a
            community, and unlock <strong>stipends, internships & PPO</strong>{" "}
            with a milestone-based ladder.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link href="#apply" className="btn-aurora">
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#ladder"
              className="inline-flex items-center rounded-md border px-4 py-2 text-sm hover:opacity-90"
            >
              See Perks Ladder
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <Pill icon={ShieldCheck} text="Official Jyesta Program" />
            <Pill icon={Calendar} text="Launch: This Semester" />
            <Pill icon={Users} text="One Mitra per College" />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3 max-w-3xl mx-auto">
          <Stat label="Colleges" value="150+" />
          <Stat label="Students Reached" value="20,000+" />
          <Stat label="Events Hosted" value="500+" />
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
      title: "1st/2nd Year Fast-Track",
      desc: "Early entry into Campus Chapter leadership.",
    },
    {
      icon: ShieldCheck,
      title: "Certificates & LoRs",
      desc: "Certificates; LoRs for top performers.",
    },
    {
      icon: Medal,
      title: "Projects, Internships & PPO",
      desc: "Real-world projects; PPO for top performers.",
    },
  ];
  return (
    <section className="py-14 md:py-20 bg-[hsl(var(--muted)/.3)]">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          badge="Why join"
          title="Benefits that are "
          subtitle="Designed for 1st year to final year students."
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
      unlock: "Onboarding complete",
      bullets: [
        "Campus Mitra badge",
        "Certificate of Participation",
        "Community access (WhatsApp/Discord)",
        "Career starter kit (resume + interview prep)",
      ],
    },
    {
      tone: "silver",
      icon: Trophy,
      title: "Silver",
      unlock: "50+ referrals OR 1 event/workshop",
      bullets: [
        "Merch kit: tee, notebook, stickers",
        "Stipend/bonus ₹2,000–₹5,000",
        "Invite to industry expert session",
        "Coupons + early job access",
      ],
    },
    {
      tone: "gold",
      icon: Crown,
      title: "Gold",
      unlock: "150+ referrals • multiple events • consistency",
      bullets: [
        "Additional stipend up to ₹15,000",
        "Letter of Recommendation",
        "Industry projects with partners",
        "Priority internship offers",
        "Leadership: Campus Chapter Lead",
        "Website & socials spotlight",
      ],
    },
    {
      tone: "platinum",
      icon: Rocket,
      title: "Platinum",
      unlock: "300+ referrals • major collab • excellence",
      bullets: [
        "PPO consideration (eligibility-based)",
        "National Ambassador recognition",
        "High-value goodies (headphones/Kindle/etc.)",
        "Founder/mentor meet-up",
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
          title="Milestone-based "
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
    { n: 1, title: "Apply", desc: "Tell us about you and your campus reach." },
    {
      n: 2,
      title: "Onboard",
      desc: "Finish short training, get toolkit + referral codes.",
    },
    {
      n: 3,
      title: "Activate",
      desc: "Run events, share updates, bring referrals, earn rewards.",
    },
    {
      n: 4,
      title: "Lead a Chapter",
      desc: "Hit milestones to launch an official Jyesta Chapter.",
    },
  ];
  return (
    <section className="py-14 md:py-20 bg-[hsl(var(--muted)/.3)]">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle badge="Simple flow" title="How it " />
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
              "Undergrad (Engineering or Management)",
              "Good communication & campus involvement",
              "~5–8 hrs/week alongside academics",
              "One Campus Mitra per college (Pan-India)",
              "1st & 2nd years get fast-track leadership",
            ]}
          />
          <GradientCard
            title="What you’ll do"
            items={[
              "Organize info sessions / workshops monthly",
              "Share updates in classes & student groups",
              "Guide peers using your referral link/code",
              "Collect feedback to improve outreach",
              "Report monthly to unlock milestones",
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

/* ---------------- FAQ ---------------- */
function FAQ() {
  return (
    <section className="py-14 md:py-20 bg-[hsl(var(--muted)/.3)]">
      <div className="mx-auto max-w-3xl px-4">
        <SectionTitle
          badge="FAQs"
          title="Everything you want to ask"
          subtitle="Stipends, milestones, and chapter launch—explained."
        />

        <div className="mt-6 divide-y rounded-xl border">
          {[
            [
              "How are stipends and bonuses decided?",
              "Performance-based: Silver ₹2,000–₹5,000; Gold up to ₹15,000, tied to verified referrals, event impact & consistency.",
            ],
            [
              "Can 1st/2nd years apply?",
              "Yes—fast-track leadership and grow into a Campus Chapter Lead.",
            ],
            [
              "What counts as a referral / enrollment?",
              "A referral uses your code/link. An enrollment is a paid registration for Jyesta’s 2-month training + 1-month internship.",
            ],
            [
              "How do I start a Chapter?",
              "Hit Gold milestones (e.g., 150+ referrals & consistent events), get college approval, then launch with Jyesta’s charter.",
            ],
          ].map(([q, a]) => (
            <details key={q} className="group open:bg-[hsl(var(--card))]">
              <summary className="cursor-pointer px-4 py-3 font-medium hover:opacity-90">
                {q}
              </summary>
              <div className="px-4 pb-4 text-sm text-[hsl(var(--muted-foreground))]">
                {a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA & Footer ---------------- */
function FinalCTA() {
  return (
    <section id="apply" className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-brand-gradient opacity-25 blur-2xl" />
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Ready to lead your{" "}
          <span className="text-gradient">college community</span>?
        </h2>
        <p className="mt-2 text-[hsl(var(--muted-foreground))]">
          Apply now to get your onboarding kit, referral code, and community
          access this week.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="https://forms.gle/" className="btn-aurora">
            Apply Now <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/campus-mitra-deck.pdf"
            target="_blank"
            className="inline-flex items-center rounded-md border px-4 py-2 text-sm hover:opacity-90"
          >
            Program Deck
          </a>
        </div>
      </div>
    </section>
  );
}
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="h-1 bg-brand-gradient" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 py-10 text-center text-sm text-[hsl(var(--muted-foreground))]">
        © {year} Jyesta. All rights reserved.
      </div>
    </footer>
  );
}

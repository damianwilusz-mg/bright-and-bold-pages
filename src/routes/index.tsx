import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { content, EMAIL } from "@/lib/content";
import { usePrefs } from "@/lib/prefs";
import { LangSwitch, ThemeSwitch } from "@/components/site/Controls";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Damian Wilusz — Software Tester & QA Engineer" },
      {
        name: "description",
        content:
          "Software tester from Rzeszów, Poland. Manual and automated testing with Cypress, Playwright and Postman, plus TypeScript, Node.js and PHP (Laravel).",
      },
      { property: "og:title", content: "Damian Wilusz — Software Tester & QA Engineer" },
      {
        property: "og:description",
        content:
          "QA engineer specialising in test automation, API testing and release quality for SaaS and hosting platforms.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border py-16 md:py-24">
      <p className="label-mono mb-8">{label}</p>
      {children}
    </section>
  );
}

function Index() {
  const { lang } = usePrefs();
  const t = content[lang];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-3">
          <a href="#top" className="font-mono text-sm font-medium">
            dw<span className="text-primary">.</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
            {(["about", "experience", "stack", "contact"] as const).map((k) => (
              <a key={k} href={`#${k}`} className="transition-colors hover:text-foreground">
                {t.nav[k]}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LangSwitch />
            <ThemeSwitch />
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-3xl px-6">
        <section className="py-20 md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t.hero.status}
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-2 font-mono text-sm text-primary">{t.hero.role}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t.hero.lead}
          </p>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {t.hero.location}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              {t.hero.cta}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#experience"
              className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-subtle"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </section>

        <Section id="about" label={t.about.title}>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            {t.about.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="experience" label={t.experience.title}>
          <div className="space-y-6">
            {t.experience.items.map((job) => (
              <article key={job.company} className="surface-card p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h2 className="text-lg font-semibold tracking-tight">{job.role}</h2>
                  <span className="font-mono text-xs text-muted-foreground">
                    {job.period} · {job.duration}
                  </span>
                </div>
                <p className="mt-1 text-sm text-primary">
                  {job.company} · {job.type}
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">{job.location}</p>
                <p className="mt-4 leading-relaxed text-muted-foreground">{job.summary}</p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((p) => (
                    <li
                      key={p}
                      className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-primary"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-subtle px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="stack" label={t.stack.title}>
          <p className="mb-8 text-muted-foreground">{t.stack.subtitle}</p>
          <div className="grid gap-6 sm:grid-cols-3">
            {t.stack.groups.map((g) => (
              <div key={g.label}>
                <p className="label-mono mb-3">{g.label}</p>
                <ul className="space-y-2 text-sm">
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" label={t.nav.contact}>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{t.contact.title}</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{t.contact.body}</p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {t.contact.cta}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Section>

        <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-border py-8 font-mono text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Damian Wilusz</span>
          <span>{t.footer}</span>
        </footer>
      </main>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { content, EMAIL } from "@/lib/content";
import { usePrefs } from "@/lib/prefs";
import { formatDate, getPosts } from "@/lib/blog";
import { SiteFooter, SiteHeader } from "@/components/site/Chrome";
import { Reveal } from "@/components/site/Reveal";

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
      <Reveal>
        <p className="label-mono mb-8">{label}</p>
      </Reveal>
      {children}
    </section>
  );
}

function Index() {
  const { lang } = usePrefs();
  const t = content[lang];
  const latestPosts = getPosts(lang).slice(0, 2);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main id="top" className="mx-auto max-w-3xl px-6">
        <section className="py-20 md:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              {t.hero.status}
            </span>
          </Reveal>
          <Reveal delay={70}>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              {t.hero.title}
            </h1>
            <p className="mt-2 font-mono text-sm text-primary">{t.hero.role}</p>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {t.hero.lead}
            </p>
            <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {t.hero.location}
            </p>
          </Reveal>
          <Reveal delay={210}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
              >
                {t.hero.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-subtle"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </section>

        <Section id="about" label={t.about.title}>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            {t.about.body.map((p, i) => (
              <Reveal key={p} delay={i * 70}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="experience" label={t.experience.title}>
          <div className="space-y-6">
            {t.experience.items.map((job, i) => (
              <Reveal key={job.company} delay={i * 80}>
                <article className="surface-card lift p-6 md:p-8">
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
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="projects" label={t.projects.title}>
          <Reveal>
            <p className="mb-8 text-muted-foreground">{t.projects.subtitle}</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.projects.items.map((p, i) => (
              <Reveal key={p.name} delay={i * 70}>
                <article className="surface-card lift h-full p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-semibold tracking-tight">{p.name}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-subtle px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="stack" label={t.stack.title}>
          <Reveal>
            <p className="mb-8 text-muted-foreground">{t.stack.subtitle}</p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {t.stack.groups.map((g, i) => (
              <Reveal key={g.label} delay={i * 70}>
                <p className="label-mono mb-3">{g.label}</p>
                <ul className="space-y-2 text-sm">
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="blog" label={t.blog.title}>
          <Reveal>
            <p className="mb-8 text-muted-foreground">{t.blog.subtitle}</p>
          </Reveal>
          <div className="space-y-4">
            {latestPosts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="surface-card lift block p-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-semibold tracking-tight">{p.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {formatDate(p.date, lang)}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <Link
              to="/blog"
              className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-primary"
            >
              {t.blog.all}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </Section>

        <Section id="contact" label={t.nav.contact}>
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{t.contact.title}</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{t.contact.body}</p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
            >
              {t.contact.cta}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </Section>

        <SiteFooter />
      </main>
    </div>
  );
}

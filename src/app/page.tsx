"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type Project = {
  name: string;
  type: string;
  result: string;
  description: string;
  image: string;
  imageAlt: string;
  tone: "accent" | "primary";
};

const projects: Project[] = [
  {
    name: "Ledgerline",
    type: "FinTech",
    result: "$2.1B processed",
    description: "Real-time clearing rails and a calm operator workspace for a neobank scaling across borders.",
    image: "/assets/project-ledgerline.png",
    imageAlt: "Dark fintech analytics dashboard with teal charts",
    tone: "accent",
  },
  {
    name: "Orbit",
    type: "SaaS",
    result: "41% faster decisions",
    description: "An analytics workspace designed around the keyboard, not the sidebar.",
    image: "/assets/project-orbit.png",
    imageAlt: "Dark SaaS analytics workspace with indigo graph",
    tone: "primary",
  },
  {
    name: "Cohort",
    type: "EdTech",
    result: "400k learners",
    description: "Adaptive learning paths that make progress visible, personal, and motivating.",
    image: "/assets/project-cohort.png",
    imageAlt: "Soft pastel education app dashboard with progress arc",
    tone: "accent",
  },
  {
    name: "Fathom",
    type: "E-commerce",
    result: "60fps checkout",
    description: "A headless store that stays fast and composed through the busiest sale of the year.",
    image: "/assets/project-fathom.png",
    imageAlt: "Mint and white e-commerce checkout interface",
    tone: "primary",
  },
];

const faqs = [
  ["How do engagements typically start?", "A two-week discovery sprint ends with a scoped roadmap and a fixed first milestone. You approve before a line of production code is written."],
  ["Who actually writes the code?", "A dedicated pod of two to four senior engineers and one designer. No juniors, no outsourcing, no rotating cast."],
  ["What happens when we're done?", "You own everything — code, infrastructure, docs, and design tokens — with a handover runbook your team can run cold."],
  ["Can you work with our existing team?", "Yes. We can own a complete workstream, pair with your team, or temporarily operate as the product and engineering function."],
];

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBack, setIsBack] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsBack(window.scrollY > window.innerHeight * 0.46);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased selection:bg-primary/20">
      <header className="sticky top-0 z-40 border-b border-border bg-background/75 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Main navigation">
          <a href="#top" className="flex items-center gap-2" onClick={closeMenu}>
            <span className="grid size-7 place-items-center rounded-lg bg-foreground font-display text-xs font-bold text-background">M</span>
            <span className="font-display text-sm font-semibold tracking-tight">Machina</span>
          </a>
          <div className="hidden items-center gap-8 text-[13px] text-muted-foreground md:flex">
            <a href="#work" className="transition-colors hover:text-foreground">Work</a>
            <a href="#capabilities" className="transition-colors hover:text-foreground">Capabilities</a>
            <a href="#team" className="transition-colors hover:text-foreground">Team</a>
            <a href="#insights" className="transition-colors hover:text-foreground">Insights</a>
          </div>
          <div className="flex items-center gap-3">
            <Button render={<a href="#cta" />} variant="default" className="hidden rounded-full sm:inline-flex">
              Start a project
            </Button>
            <Button variant="outline" size="icon" aria-label="Toggle navigation menu" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)} className="md:hidden rounded-full">
              <span className="font-mono text-xs">{isMenuOpen ? "×" : "•••"}</span>
            </Button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="border-t border-border bg-background px-6 py-4 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-muted-foreground">
              <a href="#work" onClick={closeMenu}>Work</a>
              <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
              <a href="#team" onClick={closeMenu}>Team</a>
              <a href="#insights" onClick={closeMenu}>Insights</a>
              <a href="#cta" onClick={closeMenu} className="font-medium text-foreground">Start a project →</a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
          <div>
            <p className="animate-rise font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Precision digital engineering</p>
            <h1 className="mt-5 max-w-[14ch] animate-rise font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl">We build the interfaces, systems &amp; AI that run modern companies.</h1>
            <p className="mt-6 max-w-[46ch] animate-rise text-[15px] leading-relaxed text-muted-foreground">A senior-only studio shipping production software for the teams behind the apps you already use. No handoffs, no bloat — just a machine tuned to your problem.</p>
            <div className="mt-8 flex flex-wrap gap-2 animate-rise">
              {['SaaS', 'EdTech', 'FinTech', 'E-commerce'].map((label) => <Badge variant="secondary" key={label} className="px-3.5 py-1.5 text-[12.5px] font-medium">{label}</Badge>)}
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-4 animate-rise">
              <Button render={<a href="#cta" />} className="rounded-full px-5 py-5 text-[13px] font-medium">
                Book a discovery call
              </Button>
              <a href="#work" className="text-[13px] font-medium text-foreground transition-colors hover:text-primary">See recent work <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <Turntable isBack={isBack} onToggle={() => setIsBack((back) => !back)} />
        </section>

        <section id="capabilities" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-10">
          <SectionHeading eyebrow="(a) Capabilities" title="What we machine" />
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-7">
            <CapabilityCard className="md:col-span-4 md:row-span-2" number="01 / Core" title="Full-Stack Development" copy="Type-safe services, edge rendering and resilient data layers — engineered to survive real traffic, not the demo." tone="primary">
              <div className="mt-6 flex flex-wrap gap-2"><Badge variant="outline">Edge runtime</Badge><Badge variant="outline">Type-safe API</Badge><Badge variant="outline">Sub-50ms p95</Badge></div>
            </CapabilityCard>
            <CapabilityCard className="md:col-span-3" number="02" title="UI/UX Design" copy="Design systems that read like product, not decoration." />
            <CapabilityCard className="md:col-span-3" number="03" title="AI Integration" copy="Retrieval, evals and guardrails — shipped behind a real product surface." tone="accent" />
            <CapabilityCard className="md:col-span-3" number="04" title="Mobile Apps" copy="Native-feeling iOS & Android, one codebase, offline-first." tone="soft" />
          </div>
        </section>

        <section id="work" className="mt-16 scroll-mt-16 bg-zinc-950 text-zinc-50 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
              <div className="relative aspect-square w-full max-w-[300px] shrink-0">
                <div className="absolute inset-0 rounded-full bg-zinc-50/5 ring-1 ring-zinc-50/15" />
                <div className="absolute inset-[16%] rounded-full border border-zinc-50/15" />
                <div className="absolute inset-[29%] rounded-full border border-zinc-500/40" />
                <div className="absolute inset-0 grid place-items-center text-center">
                  <div><p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-50/50">Backside</p><p className="mt-1 font-display text-3xl font-semibold tracking-tight">Library</p></div>
                </div>
                <span className="absolute left-[10%] top-[30%] size-2.5 rounded-full bg-primary ring-4 ring-zinc-50/20" />
                <span className="absolute bottom-[22%] right-[14%] size-2 rounded-full bg-zinc-400 ring-4 ring-zinc-50/20" />
              </div>
              <div className="flex-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-50/50">(b) Selected work — click to open</p>
                <h2 className="mt-4 max-w-[16ch] font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Twelve systems, shipped.</h2>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {projects.map((project) => <ProjectTile key={project.name} project={project} onOpen={() => setSelectedProject(project)} />)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="mx-auto grid max-w-6xl scroll-mt-24 items-center gap-10 px-6 py-24 md:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-3xl bg-secondary"><img src="/assets/founder-portrait.png" alt="Mara Ellison, founder of Machina" width={896} height={1152} loading="lazy" className="h-full w-full object-cover" /></div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">(c) The Founder&apos;s Desk</p>
            <blockquote className="mt-5 max-w-[30ch] font-display text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl">“We treat every engagement like we&apos;re shipping our own product — because the code we hand you becomes yours, forever.”</blockquote>
            <p className="mt-5 max-w-[48ch] text-[14px] leading-relaxed text-muted-foreground">No account layers, no ticket queues. You work directly with the people writing the code, from the first whiteboard to the last deploy.</p>
            <p className="mt-6 font-display text-sm font-semibold tracking-tight">Mara Ellison — Founder &amp; Principal Engineer</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-8">
          <SectionHeading eyebrow="(d) What people say" title="Good work travels." />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Testimonial initials="DN" tone="primary">“Machina rebuilt our checkout in six weeks and conversion is up 34%. They move like a product team, not a vendor.”<span className="mt-5 block text-[13px] font-medium text-foreground">Dana Whit <span className="font-normal text-muted-foreground">· VP Product, Fathom</span></span></Testimonial>
            <Testimonial initials="RO" tone="accent">“The AI search they shipped is the reason our retention finally crossed 70%. Precise, calm, and genuinely senior.”<span className="mt-5 block text-[13px] font-medium text-foreground">Ren Okafor <span className="font-normal text-muted-foreground">· CTO, Orbit</span></span></Testimonial>
          </div>
        </section>

        <section id="insights" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
          <SectionHeading eyebrow="(e) Insights from the work" title="See what the product taught us." />
          <div className="mt-6 divide-y divide-border border-y border-border">
            {[
              ["01", "The calm interface is a competitive advantage", "Why removing decisions from the screen can make a product feel faster — and sell more."],
              ["02", "Shipping the first intelligent workflow", "A field note on taking AI from a demo to a dependable product surface."],
              ["03", "What a senior pod actually changes", "The operating habits that let a small team replace a much larger engineering department."],
            ].map(([number, title, copy]) => <a key={number} href="#cta" className="group flex flex-col gap-3 py-6 transition-colors hover:bg-secondary/60 sm:flex-row sm:items-center sm:justify-between sm:gap-8"><span className="font-mono text-[11px] text-primary">{number}</span><span className="flex-1 font-display text-lg font-medium tracking-tight">{title}</span><span className="max-w-[34ch] text-[13px] leading-relaxed text-muted-foreground">{copy}</span><span className="text-lg text-muted-foreground transition-transform group-hover:translate-x-1">→</span></a>)}
          </div>
        </section>

        <section id="cta" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-8">
          <div className="rounded-[28px] bg-gradient-to-br from-secondary via-background to-secondary/20 p-10 text-center ring-1 ring-border sm:p-16">
            <h2 className="mx-auto max-w-[16ch] font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">Replace your engineering team.</h2>
            <p className="mx-auto mt-4 max-w-[42ch] text-[15px] leading-relaxed text-muted-foreground">One pod. Senior only. Shipped in weeks. We plug in as your whole team until you&apos;re ready to run it yourself.</p>
            <Button render={<a href="mailto:hello@machina.studio" />} className="mt-8 rounded-full px-6 py-6 text-[13px] font-medium">
              Request the engagement deck <span className="ml-2" aria-hidden="true">↗</span>
            </Button>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-24">
          <SectionHeading eyebrow="(f) FAQ" title="Frequently asked." />
          <div className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map(([question, answer], i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="font-display text-[15px] font-medium tracking-tight text-left">{question}</AccordionTrigger>
                  <AccordionContent className="text-[14px] leading-relaxed text-muted-foreground">{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2"><span className="grid size-7 place-items-center rounded-lg bg-foreground font-display text-xs font-bold text-background">M</span><span className="font-display text-sm font-semibold tracking-tight">Machina</span><span className="ml-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Engineered, not templated</span></div>
          <div className="flex flex-wrap gap-6 text-[13px] text-muted-foreground"><a href="#work" className="hover:text-foreground">Work</a><a href="#team" className="hover:text-foreground">Team</a><a href="#insights" className="hover:text-foreground">Insights</a><a href="mailto:hello@machina.studio" className="hover:text-foreground">Contact</a></div>
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">© 2026 Machina Studio</p>
        </div>
      </footer>

      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

function Turntable({ isBack, onToggle }: { isBack: boolean; onToggle: () => void }) {
  return <div className="animate-rise"><div className="perspective-stage mx-auto w-full max-w-[420px]"><button type="button" onClick={onToggle} aria-label={isBack ? "Show talent side of turntable" : "Show project library side of turntable"} className={`preserve-3d relative aspect-square w-full transition-transform duration-700 ${isBack ? "rotate-y-180" : ""}`}>
    <span className="backface-hidden absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-secondary to-primary/10 ring-1 ring-border shadow-[0_24px_80px_-36px_var(--color-primary)]" />
    <span className="backface-hidden absolute inset-0 rotate-y-180 rounded-full bg-zinc-950 text-zinc-50 ring-1 ring-zinc-50/15 shadow-[0_24px_80px_-36px_var(--color-accent)]"><span className="absolute inset-[13%] rounded-full border border-zinc-50/15" /><span className="absolute inset-[26%] rounded-full border border-zinc-500/40" /><span className="absolute inset-0 grid place-items-center text-center"><span><span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-50/50">Backside</span><span className="mt-1 block font-display text-4xl font-semibold tracking-tight">Library</span><span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-50/50">04 systems in orbit</span></span></span><span className="absolute left-[14%] top-[27%] size-3 rounded-full bg-primary ring-4 ring-zinc-50/15" /><span className="absolute bottom-[19%] right-[24%] size-2 rounded-full bg-zinc-400 ring-4 ring-zinc-50/15" /></span>
    <span className="pointer-events-none absolute inset-[12%] animate-orbit rounded-full border border-primary/25" /><span className="pointer-events-none absolute inset-[12%] rounded-full border-t-2 border-primary/50" /><span className="pointer-events-none absolute inset-[26%] rounded-full border border-border bg-secondary/40 backdrop-blur-sm" /><span className="pointer-events-none absolute inset-0 grid place-items-center text-center"><span><span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-primary">Live — orbit</span><span className="mt-1 block font-display text-4xl font-semibold tracking-tight text-foreground">41</span><span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">shipped</span></span></span><span className="pointer-events-none absolute left-[8%] top-[24%] size-3 rounded-full bg-primary ring-4 ring-background" /><span className="pointer-events-none absolute right-[12%] top-[40%] size-2.5 rounded-full bg-primary ring-4 ring-background" /><span className="pointer-events-none absolute bottom-[20%] left-[30%] size-2 rounded-full bg-zinc-950/40 ring-4 ring-background" />
  </button></div><p className="mt-5 text-center font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground">Scroll to turn the globe · click to explore</p></div>;
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) { return <div className="flex items-end justify-between border-b border-border pb-5"><h2 className="max-w-[20ch] font-display text-3xl font-semibold tracking-tight text-balance">{title}</h2><span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</span></div>; }

function CapabilityCard({ number, title, copy, tone = "default", className = "", children }: { number: string; title: string; copy: string; tone?: "default" | "primary" | "accent" | "soft"; className?: string; children?: ReactNode }) {
  const numberClass = tone === "accent" ? "text-primary" : "text-primary";
  return <Card className={`group transition-all duration-300 hover:-translate-y-1 ${className}`}>
    <CardHeader>
      <p className={`font-mono text-[11px] uppercase tracking-[0.18em] ${numberClass}`}>{number}</p>
      <CardTitle className="mt-2 font-display text-2xl font-semibold tracking-tight">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="max-w-[42ch] text-[14px] leading-relaxed text-muted-foreground mb-4">{copy}</p>
      {children}
    </CardContent>
  </Card>;
}

function ProjectTile({ project, onOpen }: { project: Project; onOpen: () => void }) { return <Card onClick={onOpen} className="group cursor-pointer p-5 transition-colors hover:bg-secondary/50 border-zinc-800 bg-zinc-950/50"><div className="mb-4 overflow-hidden rounded-xl"><img src={project.image} alt={project.imageAlt} width={project.name === "Ledgerline" || project.name === "Fathom" ? 1200 : 1008} height={768} loading="lazy" className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div><p className={`font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400`}>{project.type}</p><h3 className="mt-2 font-display text-lg font-medium tracking-tight text-zinc-50">{project.name}</h3><p className="mt-1 text-[13px] leading-relaxed text-zinc-400">{project.result}</p></Card>; }

function Testimonial({ children, initials, tone }: { children: ReactNode; initials: string; tone: "primary" | "accent" }) { return <Card className="p-6"><blockquote className="text-[14.5px] leading-relaxed text-muted-foreground">{children}</blockquote><div className="mt-5 flex items-center gap-3"><span className={`grid size-9 place-items-center rounded-full font-display text-xs font-semibold bg-secondary text-primary`}>{initials}</span></div></Card>; }

function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) { 
  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden border-none shadow-2xl gap-0">
        <DialogTitle className="sr-only">{project?.name}</DialogTitle>
        <DialogDescription className="sr-only">{project?.description}</DialogDescription>
        <div className="relative">
          <img src={project?.image} alt={project?.imageAlt} width={1200} height={768} className="aspect-[16/8] w-full object-cover" />
        </div>
        <div className="p-7 sm:p-10 bg-background">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{project?.type} / Case study</p>
            <Badge variant="secondary">{project?.result}</Badge>
          </div>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">{project?.name}</h2>
          <p className="mt-4 max-w-[54ch] text-[15px] leading-relaxed text-muted-foreground">{project?.description}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            <Badge variant="outline">Product strategy</Badge>
            <Badge variant="outline">Design system</Badge>
            <Badge variant="outline">Production build</Badge>
          </div>
          <Button onClick={onClose} variant="secondary" className="mt-9 rounded-full px-5 py-5 text-[13px]">
            Back to the library
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  ); 
}

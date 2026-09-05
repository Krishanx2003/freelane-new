import {
  ArrowUpRight,
  Check,
  CircleDot,
  FileSpreadsheet,
  MessageSquare,
  MousePointer2,
} from 'lucide-react';

function Instagram({ size = 24, strokeWidth = 2, ...props }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const orbitItems = [
  { type: 'brand', inset: 'inset-[5%]', duration: 35, reverse: false, delay: -5 },
  { type: 'instagram', inset: 'inset-[18%]', duration: 25, reverse: true, delay: -2 },
  { type: 'slack', inset: 'inset-[18%]', duration: 25, reverse: true, delay: -14.5 },
  { type: 'sheets', inset: 'inset-[32%]', duration: 20, reverse: false, delay: -10 },
  { type: 'blue', inset: 'inset-[45%]', duration: 15, reverse: true, delay: -3 },
] as const;

function BrandMark() {
  return (
    <span className="grid grid-cols-2 gap-[3px]" aria-label="Brand mark">
      <span className="size-2 rounded-[2px] bg-primary/80" />
      <span className="size-2 rounded-[2px] bg-primary/40" />
      <span className="size-2 rounded-[2px] bg-primary/60" />
      <span className="size-2 rounded-[2px] bg-primary" />
    </span>
  );
}

function OrbitIcon({ type }: { type: (typeof orbitItems)[number]['type'] }) {
  if (type === 'brand') {
    return <BrandMark />;
  }
  if (type === 'instagram') {
    return <Instagram size={24} strokeWidth={2.2} className="text-foreground" />
  }
  if (type === 'sheets') {
    return <FileSpreadsheet size={24} strokeWidth={2} className="text-emerald-500" />
  }
  if (type === 'slack') {
    return <MessageSquare size={24} strokeWidth={2} className="text-blue-500" />
  }
  return <span className="size-5 rounded-full border-[3px] border-primary border-t-transparent animate-spin" style={{ animationDuration: '3s' }} />;
}

function FeatureCard({ title, description, compact = false }: { title: string; description?: string; compact?: boolean }) {
  return (
    <article className={`flex items-start gap-4 rounded-2xl border border-border bg-background/80 p-4 shadow-sm backdrop-blur-md ${compact ? 'items-center' : ''}`}>
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary"><CircleDot size={20} strokeWidth={2} /></div>
      <div className="flex-1">
        <h2 className="font-display text-[15px] font-medium text-foreground leading-tight">{title}</h2>
        {description && <p className="mt-1 text-[13px] text-muted-foreground leading-snug">{description}</p>}
      </div>
      {!compact && <ArrowUpRight className="text-muted-foreground" size={20} strokeWidth={1.6} />}
    </article>
  );
}

export function OrbitStage() {
  return (
    <div className="relative flex w-full min-h-[500px] flex-col items-center justify-center overflow-visible py-16">
      {/* Top Line */}
      <div className="absolute top-0 w-full border-t border-border/50" />

      {/* Cursor Mark */}
      <div className="absolute left-4 top-8 text-foreground/20 md:left-12">
        <MousePointer2 size={31} strokeWidth={1.6} />
      </div>

      <section className="relative aspect-square w-full max-w-[460px] flex items-center justify-center" aria-label="Orbiting integrations">
        {/* Glow */}
        <div className="absolute inset-[15%] rounded-full bg-primary/20 blur-[80px]" />

        {/* Rings */}
        <div className="absolute inset-[5%] rounded-full border border-border/60" />
        <div className="absolute inset-[18%] rounded-full border border-border/40" />
        <div className="absolute inset-[32%] rounded-full border border-primary/15" />
        <div className="absolute inset-[45%] rounded-full border border-primary/25" />

        {/* Center Mark */}
        <div className="absolute inset-0 m-auto flex size-16 items-center justify-center rounded-full border border-border bg-background shadow-md">
          <BrandMark />
        </div>

        {/* Orbiting Items */}
        {orbitItems.map((item, i) => (
          <div 
            key={i} 
            className={`absolute ${item.inset}`} 
            style={{ 
              animation: `spin ${item.duration}s linear infinite ${item.reverse ? 'reverse' : 'normal'}`,
              animationDelay: `${item.delay}s`,
            }}
          >
            {/* Fixed positioning container handles translation so animation rotate doesn't clash */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* Counter-rotating badge keeps the icon perfectly upright */}
              <div 
                className="flex size-11 items-center justify-center rounded-xl border border-border bg-background shadow-sm"
                style={{
                  animation: `spin ${item.duration}s linear infinite ${item.reverse ? 'normal' : 'reverse'}`,
                  animationDelay: `${item.delay}s`,
                }}
              >
                <OrbitIcon type={item.type} />
              </div>
            </div>
          </div>
        ))}

        {/* Feature Cards Cluster */}
        <div className="absolute -bottom-12 -right-4 flex flex-col gap-3 z-10 w-[260px] sm:-right-12 md:-right-24">
          <FeatureCard title="Campaign Planner" description="Creates clear, ready-to-use campaigns." />
          <FeatureCard title="Ready made solutions" compact />
        </div>
      </section>

      {/* Bottom Line */}
      <div className="absolute bottom-0 w-full border-b border-border/50" />
      
      {/* Status Pill */}
      <div className="absolute bottom-6 flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-4 py-2 text-[13px] font-medium text-foreground shadow-sm backdrop-blur-md">
        <Check size={14} strokeWidth={2.5} className="text-primary" /> 
        Built for momentum
      </div>
    </div>
  );
}

const BODY_FONT = "'Inter', system-ui, sans-serif";

function TechPills({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[13px] text-white/85"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function WorkTechStack({
  frontendStack,
  backendStack,
  highlights,
}: {
  frontendStack: readonly string[];
  backendStack: readonly string[];
  highlights: readonly string[];
}) {
  return (
    <section
      className="mt-10 max-w-3xl border border-white/15 p-6 sm:p-8"
      style={{ fontFamily: BODY_FONT }}
    >
      <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/45">
        Tech stack
      </h2>

      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-white/55">
            Frontend
          </p>
          <TechPills items={frontendStack} />
        </div>
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-white/55">
            Backend
          </p>
          <TechPills items={backendStack} />
        </div>
      </div>

      {highlights.length > 0 ? (
        <div className="mt-8 border-t border-white/15 pt-8">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-white/55">
            Highlights
          </p>
          <ul className="mt-4 space-y-2.5 text-[14px] leading-relaxed text-white/70">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/50" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import noiseTexture from "@/assets/noise-tex.webp";
import { MenuOverlay } from "@/components/MenuOverlay";
import { WorkCornerMarks } from "@/components/WorkCornerMarks";
import { WORK_SERVICES, FULLSTACK_PREVIEW_ASPECT } from "@/lib/workServices";

const MENU_FONT = "'Bebas Neue', sans-serif";
const BODY_FONT = "'Inter', system-ui, sans-serif";

function WorkIntro() {
  return (
    <>
      <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-white">
        What I can offer
      </h1>
      <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/70">
        I design and build custom Shopify ecommerce stores — responsive,
        product-focused storefronts with clear navigation, strong product
        presentation, and smooth shopping flows from discovery to checkout.
      </p>
    </>
  );
}

export default function Work() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute"
          style={{
            backgroundImage: `url(${noiseTexture})`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
            opacity: 0.14,
            inset: "-200%",
            width: "400%",
            height: "400%",
          }}
        />
      </div>

      <WorkCornerMarks />

      <div className="relative z-10" style={{ fontFamily: BODY_FONT }}>
        <section className="flex min-h-[50vh] flex-col justify-center px-8 py-12 sm:px-12 lg:hidden">
          <div className="max-w-md">
            <WorkIntro />
          </div>
        </section>

        <section className="pointer-events-none fixed inset-y-0 left-0 z-20 hidden w-1/2 items-center px-14 py-16 lg:flex xl:px-20">
          <div className="pointer-events-auto max-w-md">
            <WorkIntro />
          </div>
        </section>

        <section className="border-t border-white/15 lg:ml-[50%] lg:min-h-screen lg:border-l lg:border-t-0">
          <div className="grid h-full grid-cols-1 sm:grid-cols-2">
            {WORK_SERVICES.map((service, index) => {
              const isLeftColumn = index % 2 === 0;
              const isBottomRow =
                index >= Math.floor((WORK_SERVICES.length - 1) / 2) * 2;
              const isLast = index === WORK_SERVICES.length - 1;

              return (
              <article
                key={service.number}
                className={`relative flex min-h-[420px] flex-col justify-between border-white/15 p-8 sm:min-h-[520px] sm:p-10 ${
                  !isLast ? "border-b" : ""
                } ${isLeftColumn ? "sm:border-r" : ""} ${isBottomRow ? "sm:border-b-0" : ""}`}
              >
                {service.image ? (
                  <Link
                    to="/work/$slug"
                    params={{ slug: service.slug }}
                    className="mb-6 block w-full overflow-hidden transition-opacity hover:opacity-90"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      draggable={false}
                      className="w-full object-cover object-top"
                      style={{
                        aspectRatio:
                          service.imageAspect ?? FULLSTACK_PREVIEW_ASPECT,
                      }}
                    />
                  </Link>
                ) : (
                  <div
                    className="mb-6 w-full bg-white/10"
                    style={{
                      aspectRatio:
                        service.imageAspect ?? FULLSTACK_PREVIEW_ASPECT,
                    }}
                  />
                )}

                <div className="flex items-end justify-between gap-6">
                  <div className="min-w-0">
                    <h2 className="text-[17px] font-semibold leading-snug text-white">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/55">
                      {service.description}
                    </p>
                  </div>
                  <span className="shrink-0 text-[13px] text-white/45">
                    {service.number}
                  </span>
                </div>
              </article>
              );
            })}
          </div>
        </section>
      </div>

      <div className="fixed inset-x-0 bottom-8 z-50 flex justify-center sm:bottom-10">
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="rounded-[32px] bg-white px-8 py-2 text-[24px] leading-none text-black transition-all duration-300 hover:px-10 hover:py-3"
          style={{ fontFamily: MENU_FONT }}
        >
          Menu
        </button>
      </div>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </main>
  );
}

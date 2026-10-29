import Footer from "../footer/Footer";
import { ArrowLeft } from "lucide-react";

/* 👇 Put your pictures in public/images/ and change the names here.
   Change single-hero.jpg any time to use a different background. */
const IMAGES = {
  hero: "/assets/sp1.png",
  drink: "/assets/sp2.png",
  dish: "/assets/sp3.png",
  wide: "/assets/sp4.png",
};

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nisl in pellentesque rement nunc nisl. Augue habitant accumsan, ut parturient orci ut etiam congue est.";

type SinglePortfolioPageProps = {
  onMenuClick?: () => void;
  onGridClick?: () => void;
  onReservationClick?: () => void;
};

function Pic({ src, label, className }: { src: string; label: string; className: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`bg-[#cfd8c0] bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}

function Arrow({ dir, className = "" }: { dir: "left" | "right"; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 12"
      aria-hidden="true"
      className={`fill-none stroke-current stroke-[1.4] ${dir === "left" ? "-scale-x-100" : ""} ${className}`}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 6h21M17 1l5 5-5 5" />
    </svg>
  );
}

export default function SinglePortfolioPage({
  onMenuClick,
  onGridClick,
  onReservationClick,
}: SinglePortfolioPageProps) {
  return (
    <main className="min-h-screen bg-white font-rufina text-black">
      {/* ================= Hero ================= */}
      <section className="relative isolate overflow-hidden bg-[#5a4a32] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
        />
        {/* dark overlay so the white text is always clear */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/35 to-black/55"
        />

        <div className="mx-auto flex min-h-[380px] w-full max-w-[1400px] flex-col px-6 pb-8 pt-6 sm:min-h-[460px] sm:px-10 lg:min-h-[560px] lg:px-[6%] lg:pt-10">
          {/* Header */}
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 sm:gap-6">
              <button
                type="button"
                aria-label="Back to navigation"
                onClick={onMenuClick}
                className="flex size-8 shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <ArrowLeft aria-hidden="true" className="size-6" />
              </button>
              <a
                href="#home"
                className="relative inline-block px-1 text-2xl font-normal leading-none text-white no-underline [text-shadow:0_1px_6px_rgba(0,0,0,0.6)] sm:text-3xl lg:text-4xl"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-[12%] left-[18%] right-[19%] h-[135%] border border-white/80"
                />
                <span className="relative">FoodZero</span>
              </a>
            </div>

            <div className="flex items-center gap-4 lg:gap-8">
              <a
                href="tel:+8685234600"
                className="hidden font-sans text-sm tracking-wide text-white no-underline [text-shadow:0_1px_4px_rgba(0,0,0,0.6)] md:block"
              >
                +86 852 346 000
              </a>
              <a
                href="#reservations"
                  onClick={(event) => {
                    event.preventDefault();
                    onReservationClick?.();
                  }}
                className="border border-white/90 px-4 py-2 text-xs text-white no-underline transition-colors hover:bg-white hover:text-black sm:px-6 sm:py-3 sm:text-sm lg:text-base"
              >
                Reservations
              </a>
            </div>
          </header>

          {/* Title */}
          <div className="my-auto pt-10 text-center">
            <h1 className="mx-auto m-0 max-w-3xl text-4xl font-normal leading-tight text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.65)] sm:text-6xl lg:text-7xl">
              Deep Sea Snow White Cod Fillet
            </h1>
          </div>

          {/* Scroll hint */}
          <div className="flex flex-col items-center gap-2 font-sans text-xs text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.7)]">
            <span style={{ writingMode: "vertical-rl" }}>Scroll</span>
            <span aria-hidden="true" className="h-8 w-px bg-white/80" />
          </div>
        </div>
      </section>

      {/* ================= Story ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 md:py-20 lg:px-[11%] lg:py-24">
          <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-6 md:gap-y-0">
            {/* Small picture */}
            <Pic
              src={IMAGES.drink}
              label="Cocktail with lime and thyme"
              className="aspect-[4/5] w-full md:col-span-4 md:row-start-1"
            />

            {/* Melt in Your Mouth */}
            <div className="md:col-span-5 md:col-start-8 md:row-start-1">
              <h2 className="m-0 text-2xl font-normal leading-tight sm:text-3xl">
                Melt in Your Mouth
              </h2>
              <p className="m-0 mt-4 max-w-xs font-sans text-sm leading-relaxed text-black/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="m-0 mt-4 max-w-xs font-sans text-sm leading-relaxed text-black/80">
                {LOREM}
              </p>
            </div>

            {/* Large picture */}
            <Pic
              src={IMAGES.dish}
              label="Pan seared fish fillet with herbed rice"
              className="aspect-[4/5] w-full md:col-span-7 md:col-start-3 md:row-start-2"
            />

            {/* The Best Taste */}
            <div className="self-end md:col-span-3 md:col-start-10 md:row-start-2 md:pb-6">
              <h2 className="m-0 text-2xl font-normal leading-tight sm:text-3xl">
                The Best Taste
              </h2>
              <p className="m-0 mt-4 max-w-xs font-sans text-sm leading-relaxed text-black/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Cooking Suggestions */}
            <div className="md:col-span-5 md:col-start-4 md:row-start-3 md:mt-24">
              <p className="m-0 max-w-xs font-sans text-sm leading-relaxed text-black/80">
                {LOREM}
              </p>
              <h2 className="m-0 mt-8 text-2xl font-normal leading-tight sm:text-3xl">
                Cooking Suggestions
              </h2>
              <p className="m-0 mt-4 max-w-xs font-sans text-sm leading-relaxed text-black/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Wide picture ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 pb-16 sm:px-10 md:pb-24 lg:px-[14%]">
          <Pic
            src={IMAGES.wide}
            label="Seared salmon with vegetables on a plate"
            className="aspect-[16/10] w-full"
          />
        </div>
      </section>

      {/* ================= Previous / next post ================= */}
      <section className="bg-[#e8eee0]">
        <nav
          aria-label="Portfolio posts"
          className="mx-auto grid max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-8 sm:px-10 lg:px-[10%] lg:py-10"
        >
          <a href="#previous" className="text-black no-underline">
            <span className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-wide sm:text-xs">
              <Arrow dir="left" className="w-5" />
              Previous Post
            </span>
            <span className="mt-2 block text-sm leading-snug sm:text-base">
              Strip Steak With Rosemary Butter
            </span>
          </a>

          <button
            type="button"
            aria-label="Back to all portfolio items"
            onClick={onGridClick}
            className="grid size-8 cursor-pointer grid-cols-3 gap-[3px] border-0 bg-transparent p-1.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            {Array.from({ length: 9 }, (_, i) => (
              <span key={i} className="block bg-black" />
            ))}
          </button>

          <a href="#next" className="justify-self-end text-right text-black no-underline">
            <span className="flex items-center justify-end gap-2 font-sans text-[10px] uppercase tracking-wide sm:text-xs">
              Next Post
              <Arrow dir="right" className="w-5" />
            </span>
            <span className="mt-2 block text-sm leading-snug sm:text-base">
              Option of natural wine available
            </span>
          </a>
        </nav>
      </section>

      <Footer />
    </main>
  );
}
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Footer from "../footer/Footer";

/* 👇 Put your pictures in public/images/ and change the names here.
   Change grid-hero.jpg any time to use a different background. */
const HERO = "/assets/g1.png";

const FILTERS = ["All", "Starter", "Launch", "Dinner", "Drinks", "Sweets", "Fruits"] as const;
type Filter = (typeof FILTERS)[number];

type Dish = {
  title: string;
  image: string;
  tags: string[]; // shown on the card
  cats: Exclude<Filter, "All">[]; // used by the filter tabs
};

const dishes: Dish[] = [
  {
    title: "Premium Deep Sea Snow White Cod Fillet",
    image: "/assets/g2.png",
    tags: ["Launch", "Dinner"],
    cats: ["Launch", "Dinner"],
  },
  {
    title: "Option of natural wine available",
    image: "/assets/g3.png",
    tags: ["Drink", "Fruits"],
    cats: ["Drinks", "Fruits"],
  },
  {
    title: "Best pumpkin for pumpkin soup",
    image: "/assets/g4.png",
    tags: ["Launch", "Starters"],
    cats: ["Launch", "Starter"],
  },
  {
    title: "Strip Steak With Rosemary Butter",
    image: "/assets/g5.png",
    tags: ["Dinner", "Launch"],
    cats: ["Dinner", "Launch"],
  },
  {
    title: "Braised Sliced Abalone, Fish Maw with Premium Seafood",
    image: "/assets/g6.png",
    tags: ["Cold Dishes", "Starters"],
    cats: ["Starter"],
  },
  {
    title: "Pan Fried Live Prawn with Superior Soy Sauce",
    image: "/assets/g7.png",
    tags: ["Starter", "Dinner"],
    cats: ["Starter", "Dinner"],
  },
  {
    title: "Honey Glazed Fruit Tart",
    image: "/assets/g4.png",
    tags: ["Sweets", "Fruits"],
    cats: ["Sweets", "Fruits"],
  },
  {
    title: "Warm Chocolate Lava Cake",
    image: "/assets/g2.png",
    tags: ["Sweets", "Dinner"],
    cats: ["Sweets", "Dinner"],
  },
];

/* Column spans on desktop. Repeats every 6 cards: wide+narrow, narrow+wide, half+half */
const SPANS = [
  "md:col-span-8",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-8",
  "md:col-span-6",
  "md:col-span-6",
];

const PAGE_SIZE = 6;

type GridPageProps = {
  onMenuClick?: () => void;
  onReservationClick?: () => void;
};

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 12"
      aria-hidden="true"
      className={`fill-none stroke-current stroke-[1.4] ${className}`}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 6h21M17 1l5 5-5 5" />
    </svg>
  );
}

export default function GridPage({ onMenuClick, onReservationClick }: GridPageProps) {
  const [filter, setFilter] = useState<Filter>("Launch");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = dishes.filter((d) => filter === "All" || d.cats.includes(filter));
  const shown = filtered.slice(0, visible);
  const hasMore = filtered.length > visible;

  const pick = (f: Filter) => {
    setFilter(f);
    setVisible(PAGE_SIZE);
  };

  return (
    <main className="min-h-screen bg-white font-rufina text-black">
      {/* ================= Hero ================= */}
      <section className="relative isolate overflow-hidden bg-[#4a3f32] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO})` }}
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
            <h1 className="m-0 text-4xl font-normal leading-tight text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.65)] sm:text-6xl lg:text-7xl">
              Portfolio - Grids
            </h1>
          </div>

          {/* Scroll hint */}
          <div className="flex flex-col items-center gap-2 font-sans text-xs text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.7)]">
            <span style={{ writingMode: "vertical-rl" }}>Scroll</span>
            <span aria-hidden="true" className="h-8 w-px bg-white/80" />
          </div>
        </div>
      </section>

      {/* ================= Filters + grid ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-8 md:py-14 lg:px-[6%] lg:py-16">
          {/* Filter tabs */}
          <ul
            role="tablist"
            aria-label="Filter dishes"
            className="m-0 mb-8 flex list-none flex-wrap justify-center gap-x-6 gap-y-2 p-0 sm:gap-x-8 md:mb-12"
          >
            {FILTERS.map((f) => (
              <li key={f}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={filter === f}
                  onClick={() => pick(f)}
                  className={`cursor-pointer border-0 border-b bg-transparent px-0.5 pb-1 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:text-base ${
                    filter === f
                      ? "border-black text-black"
                      : "border-transparent text-black/70 hover:text-black"
                  }`}
                >
                  {f}
                </button>
              </li>
            ))}
          </ul>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:gap-5">
            {shown.map((d, i) => (
              <article
                key={d.title}
                className={`group relative isolate h-80 overflow-hidden bg-[#cfd8c0] sm:h-96 lg:h-[30rem] ${
                  SPANS[i % SPANS.length]
                } ${i % SPANS.length === 4 || i % SPANS.length === 5 ? "" : ""}`}
              >
                <div
                  role="img"
                  aria-label={d.title}
                  className="absolute inset-0 -z-10 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${d.image})` }}
                />
                {/* gradient so the text is always readable */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                />

                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                  <h3 className="m-0 max-w-[26rem] text-xl font-normal leading-snug [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] sm:text-2xl">
                    {d.title}
                  </h3>
                  <p className="m-0 mt-3 font-sans text-xs text-white/90">
                    {d.tags.join(" · ")}
                  </p>
                </div>

                <Arrow
                  className={`absolute bottom-6 right-6 w-6 text-white transition-opacity ${
                    i === 0 ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </article>
            ))}
          </div>

          {shown.length === 0 && (
            <p className="m-0 py-16 text-center font-sans text-sm text-black/70">
              No dishes in this category yet.
            </p>
          )}

          {/* Load more */}
          {hasMore && (
            <div className="mt-10 text-center md:mt-14">
              <button
                type="button"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="cursor-pointer border border-black/70 bg-transparent px-8 py-2.5 font-sans text-sm text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
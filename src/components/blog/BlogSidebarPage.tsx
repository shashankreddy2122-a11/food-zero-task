import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Footer from "../footer/Footer";
import BlogComments from "./BlogComments";

/* 👇 Put your pictures in public/images/ and change the names here.
   Change blog-hero.jpg any time to use a different background. */
const IMAGES = {
  hero: "/assets/p1.png",
  main:  "/assets/p2.png",
  small1:  "/assets/p3.png",
  small2:  "/assets/b6.png",
  author:  "/assets/h14.png",
  recent: [  "/assets/h9.png",  "/assets/h10.png",  "/assets/b5.png",  "/assets/b6.png",],
};

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit amet nunc, arcu donec nam etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const categories = [
  { name: "Fashion", count: 14 },
  { name: "Food", count: 20 },
  { name: "Music", count: 12 },
  { name: "Travel", count: 36 },
];

const comments = [
  "Julia Wilson on Vegan baked oatmeal with fresh berries",
  "Eli Jacob on Your Top Apple Healthy",
  "Chris Henry on Some Foods Are To Weight Loss",
  "Ed Hogs on That Can Give You More Energy",
];

const archives = [
  { name: "October 2021", count: 12 },
  { name: "September 2021", count: 6 },
  { name: "August 2021", count: 23 },
];

const recentPosts = [0, 1, 2, 3].map((i) => ({
  title: "Vegan baked oatmeal with fresh berries",
  meta: "Julia Wilson · October 17, 2021",
  image: IMAGES.recent[i],
}));

const tags = ["Design", "Photography", "Images", "Video", "Music", "Travel"];

type BlogSidebarPageProps = {
  onMenuClick?: () => void;
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

function WidgetTitle({ children }: { children: string }) {
  return (
    <h3 className="m-0 border-b border-dotted border-black pb-2 text-lg font-normal leading-none">
      {children}
    </h3>
  );
}

function CountList({ items }: { items: { name: string; count: number }[] }) {
  return (
    <ul className="m-0 mt-4 list-none p-0 font-sans text-sm">
      {items.map((c) => (
        <li key={c.name} className="flex justify-between border-b border-black/10 py-2 last:border-0">
          <a href="#category" className="text-black no-underline hover:underline">
            {c.name}
          </a>
          <span>{c.count}</span>
        </li>
      ))}
    </ul>
  );
}

function TagList({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((t) => (
        <a
          key={t}
          href="#tag"
          className="border border-black/60 px-3 py-1 font-sans text-xs text-black no-underline transition-colors hover:bg-black hover:text-white"
        >
          {t}
        </a>
      ))}
    </div>
  );
}

export default function BlogSidebarPage({ onMenuClick, onReservationClick }: BlogSidebarPageProps) {
  const [query, setQuery] = useState("");

  return (
    <main className="min-h-screen bg-white font-rufina text-black">
      {/* ================= Hero ================= */}
      <section className="relative isolate overflow-hidden bg-[#3a3a34] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
        />
        {/* dark overlay so the white text is always clear */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/45 to-black/30"
        />

        <div className="mx-auto flex min-h-[420px] w-full max-w-[1400px] flex-col px-6 pb-10 pt-6 sm:min-h-[480px] sm:px-10 lg:min-h-[540px] lg:px-[6%] lg:pt-10">
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

          {/* Title block */}
          <div className="mt-auto pt-16 lg:ml-[11%]">
            <span className="inline-block border border-white/90 px-4 py-1.5 font-sans text-xs text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.6)] sm:text-sm">
              Fashion
            </span>
            <h1 className="m-0 mt-5 max-w-2xl text-4xl font-normal leading-tight text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.65)] sm:text-5xl lg:text-6xl">
              Three Ideas for Cooking Goat Meat at Home
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-sans text-xs text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.7)] sm:text-sm">
              <span
                role="img"
                aria-label="Julia Wilson"
                className="size-9 rounded-full bg-[#cfd8c0] bg-cover bg-center sm:size-10"
                style={{ backgroundImage: `url(${IMAGES.author})` }}
              />
              <span>Julia Wilson</span>
              <span aria-hidden="true">•</span>
              <span>October 17, 2021</span>
              <span aria-hidden="true">•</span>
              <span>3:31 pm</span>
              <span aria-hidden="true">•</span>
              <span>0 comments</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Article + sidebar ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10 md:py-14 lg:px-[6%]">
          {/* Breadcrumb */}
          <p className="m-0 mb-8 font-sans text-xs text-black/70 sm:text-sm">
            <a href="#home" className="text-black/70 no-underline hover:text-black">Home</a>
            {" / "}
            <a href="#blog" className="text-black/70 no-underline hover:text-black">Blog</a>
            {" / "}
            <span className="text-black">Three Ideas for Cooking Goat Meat at Home</span>
          </p>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-14">
            {/* ---------- Article ---------- */}
            <article className="min-w-0">
              <p className="m-0 max-w-3xl font-sans text-sm leading-relaxed text-black/80">
                {LOREM}
              </p>

              {/* Picture grid: one large + two small */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:grid-rows-2 sm:gap-4">
                <Pic
                  src={IMAGES.main}
                  label="Seared goat meat with herbs and vegetables"
                  className="aspect-square w-full sm:col-span-2 sm:row-span-2 sm:aspect-auto sm:min-h-[22rem]"
                />
                <Pic
                  src={IMAGES.small1}
                  label="Leek on a pale plate"
                  className="aspect-[4/3] w-full sm:aspect-auto"
                />
                <Pic
                  src={IMAGES.small2}
                  label="Plated starter with sauce"
                  className="aspect-[4/3] w-full sm:aspect-auto"
                />
              </div>

              <p className="m-0 mt-8 max-w-3xl font-sans text-sm leading-relaxed text-black/80">
                {LOREM}
              </p>

              {/* Quote */}
              <blockquote className="relative m-0 my-12 max-w-3xl">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-6 right-0 select-none text-[8rem] leading-none text-black/10 sm:text-[10rem]"
                >
                  ”
                </span>
                <p className="relative m-0 border-l-4 border-[#5a6a00] pl-5 font-sans text-lg font-bold italic leading-snug text-[#5a6a00] sm:text-xl">
                  “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  lorem id penatibus imperdiet. Turpis egestas ultricies purus
                  auctor tincidunt lacus nunc.
                </p>
              </blockquote>

              <p className="m-0 max-w-3xl font-sans text-sm leading-relaxed text-black/80">
                {LOREM} {LOREM}
              </p>

              {/* Post tags */}
              <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-black/10 pt-6">
                <span className="font-sans text-sm">Tags:</span>
                <TagList />
              </div>

              {/* Author box */}
              <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
                <span
                  role="img"
                  aria-label="Julie Christie"
                  className="size-24 shrink-0 rounded-full bg-[#cfd8c0] bg-cover bg-center"
                  style={{ backgroundImage: `url(${IMAGES.author})` }}
                />
                <div>
                  <h3 className="m-0 text-xl font-normal">Julie Christie</h3>
                  <p className="m-0 mt-2 max-w-md font-sans text-sm leading-relaxed text-black/80">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                    lorem id penatibus imperdiet.
                  </p>
                </div>
              </div>
            </article>

            {/* ---------- Sidebar ---------- */}
            <aside aria-label="Blog sidebar" className="space-y-10">
              {/* Search */}
              <form
                role="search"
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center border-b border-black pb-2"
              >
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search ....."
                  aria-label="Search"
                  className="w-full min-w-0 border-0 bg-transparent font-sans text-sm outline-none placeholder:text-black"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="cursor-pointer border-0 bg-transparent p-0 text-black"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-none stroke-current stroke-2" strokeLinecap="round">
                    <circle cx="10.5" cy="10.5" r="6.5" />
                    <path d="M15.5 15.5L21 21" />
                  </svg>
                </button>
              </form>

              <div>
                <WidgetTitle>Categories</WidgetTitle>
                <CountList items={categories} />
              </div>

              <div>
                <WidgetTitle>Recent Comments</WidgetTitle>
                <ul className="m-0 mt-4 list-none space-y-3 p-0 font-sans text-xs leading-snug text-black/80">
                  {comments.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>

              <div>
                <WidgetTitle>Archives</WidgetTitle>
                <CountList items={archives} />
              </div>

              <div>
                <WidgetTitle>Recent Posted</WidgetTitle>
                <ul className="m-0 mt-4 list-none space-y-4 p-0">
                  {recentPosts.map((p, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Pic
                        src={p.image}
                        label={p.title}
                        className="size-14 shrink-0"
                      />
                      <div>
                        <a href="#post" className="text-sm leading-snug text-black no-underline hover:underline">
                          {p.title}
                        </a>
                        <p className="m-0 mt-1 font-sans text-[10px] text-black/60">{p.meta}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <WidgetTitle>Tags</WidgetTitle>
                <TagList className="mt-4" />
              </div>
            </aside>
          </div>
        </div>
      </section>
      <BlogComments/>
      <Footer />
    </main>
  );
}
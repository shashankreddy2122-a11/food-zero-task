import { ArrowLeft } from "lucide-react";
import Footer from "../footer/Footer";

const posts = [
  {
    image: "/assets/b2.png",
    author: "/assets/h14.png",
    title: "Fruit and vegetables and protection against diseases",
    byline: "Julia Wilson",
  },
  {
    image: "/assets/b3.png",
    author: "/assets/h15.png",
    title: "Asparagus Spring Salad with Rocket, Goat's Cheese",
    byline: "Dwayne Reed",
  },
  {
    image: "/assets/b4.png",
    author: "/assets/h21.png",
    title: "The Best Style of Dough for Dumplings",
    byline: "Jennifer Lopez",
  },
  {
    image: "/assets/b5.png",
    author: "/assets/h17.png",
    title: "7 Reasons to Start Your Day With Lemon Water",
    byline: "Theresa Webb",
  },
  {
    image: "/assets/b6.png",
    author: "/assets/h19.png",
    title: "Three Ideas for Cooking Goat Meat at Home",
    byline: "Cody Fisher",
  },
  {
    image: "/assets/b7.png",
    author: "/assets/h18.png",
    title: "12 Sparkling Wines We're Loving This Summer",
    byline: "Leslie Alexander",
  },
];

type BlogsPageProps = {
  onBack?: () => void;
  onReservationClick?: () => void;
};

export default function BlogsPage({ onBack, onReservationClick }: BlogsPageProps) {
  return (
    <main className="min-h-screen bg-white font-rufina text-[#1d2a07]">
      <section className="relative isolate mx-auto aspect-[1921/850] min-h-[320px] w-full overflow-hidden bg-[#223403] text-white sm:min-h-[480px] lg:min-h-0">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/b1.png')" }}
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/55" />

        <header className="absolute left-5 right-5 top-4 z-10 flex items-center justify-between sm:left-[7.5%] sm:right-[7.5%] sm:top-6">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              aria-label="Back to navigation"
              onClick={onBack}
              className="flex size-8 cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <ArrowLeft aria-hidden="true" className="size-5 sm:size-6" />
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
          <div className="flex items-center gap-2 sm:gap-6">
            <a href="tel:+8685234600" className="hidden font-sans text-xs text-white no-underline sm:block">
              +86 852 346 000
            </a>
            <a href="#reservations" onClick={(event) => { event.preventDefault(); onReservationClick?.(); }} className="border border-white/80 px-3 py-2 font-sans text-[10px] text-white no-underline sm:px-5 sm:text-sm">
              Reservations
            </a>
          </div>
        </header>

        <div className="absolute inset-x-4 top-1/2 z-10 -translate-y-1/2 text-center">
          <h1 className="m-0 text-[clamp(24px,4vw,64px)] font-normal leading-tight">
            Blogs - Two Columns
          </h1>
          <p className="m-0 mt-2 font-sans text-[10px] leading-relaxed text-white/90 sm:text-sm">
            It is easy to find what your beautiful blog has for today.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-8 sm:px-10 sm:py-12 lg:px-[7.5%]">
        <p className="m-0 mb-5 font-sans text-[10px] text-[#1d2a07]/50 sm:mb-8 sm:text-xs">
          Home / Blogs / Blog, Two Columns
        </p>
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-8 sm:gap-y-12 max-[340px]:grid-cols-1">
          {posts.map((post) => (
            <article key={post.title} className="min-w-0">
              <div className="relative">
                <div
                  role="img"
                  aria-label={post.title}
                  className="aspect-[1/1] w-full bg-[#e8eee0] bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <span className="absolute right-0 top-0 bg-[#4a5a00] px-2 py-1 font-sans text-[9px] text-white sm:px-4 sm:text-xs">
                  Fashion
                </span>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-1 font-sans text-[8px] leading-tight text-[#4a5a00] sm:mt-4 sm:gap-x-2 sm:text-xs">
                <span
                  role="img"
                  aria-label={`${post.byline} author photo`}
                  className="size-4 shrink-0 rounded-full bg-[#cfd8c0] bg-cover bg-center sm:size-6"
                  style={{ backgroundImage: `url(${post.author})` }}
                />
                <span>{post.byline}</span>
                <span aria-hidden="true">•</span>
                <span>October 17, 2021</span>
                <span aria-hidden="true">•</span>
                <span>6 Days</span>
                <span aria-hidden="true">•</span>
                <span>0 comments</span>
              </div>

              <h2 className="m-0 mt-2 border-b border-dotted border-[#1d2a07]/70 pb-2 text-[clamp(13px,2.1vw,22px)] font-normal leading-[1.2] sm:mt-3">
                {post.title}
              </h2>
              <p className="m-0 mt-2 font-sans text-[9px] leading-relaxed text-[#1d2a07]/80 sm:text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a
                href="#read-more"
                className="mt-2 inline-flex items-center gap-1.5 font-sans text-[9px] text-[#1d2a07] no-underline sm:mt-3 sm:text-xs"
              >
                Read More
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
        <nav aria-label="Blog pagination" className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-14">
          {["Prev", "2", "3", "4", "Next"].map((label) => (
            <button
              key={label}
              type="button"
              className="min-w-10 rounded-md border border-black bg-white px-4 py-2 font-sans text-sm text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              {label}
            </button>
          ))}
        </nav>
      </section>
      <Footer />
    </main>
  );
}
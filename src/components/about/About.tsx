import Footer from "../footer/Footer";
import AboutMore from "./AboutMore";
import { ArrowLeft } from "lucide-react";
/* 👇 Put your pictures in public/images/ and change the names here.
   Change about-hero.jpg any time to use a different background. */
const IMAGES = {
  hero: "/assets/a1.png",
  story: "/assets/a2.png",
  manager: "/assets/a3.png",
  chef: "/assets/a4.png",
};

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.";

type AboutPageProps = {
  onMenuClick?: () => void;
  onReservationClick?: () => void;
};

/* Hand-drawn style tomato slices */
function TomatoSketch({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 120 80"
      aria-hidden="true"
      className={`pointer-events-none absolute fill-none stroke-black/70 ${className}`}
      strokeWidth="0.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 44C8 22 28 10 48 14c16 4 24 20 20 36-4 14-20 22-36 18C16 64 8 56 8 44z" />
      <path d="M16 44c0-12 12-20 24-18 10 2 16 12 14 22-2 10-12 16-22 14-10-2-16-8-16-18z" />
      <path d="M36 40c4-4 10-4 12 0s0 10-6 10-10-6-6-10z" />
      <path d="M58 30C66 14 86 8 102 18c12 8 14 26 4 38-10 12-30 14-42 4" />
      <path d="M68 34c6-8 18-10 26-4 8 6 8 18 0 24-8 6-20 4-26-4" />
      <path d="M72 40l10 4M78 32l2 12M90 34l-8 10M74 50l10-6" />
      <path d="M48 14c2-8 8-12 14-12 0 6-4 12-10 14" />
    </svg>
  );
}

function Pic({
  src,
  label,
  className,
}: {
  src: string;
  label: string;
  className: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`bg-[#cfd8c0] bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}

export default function AboutPage({ onMenuClick, onReservationClick }: AboutPageProps) {
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
          className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/35 to-black/55"
        />

        <div className="mx-auto flex min-h-[420px] w-full max-w-[1400px] flex-col px-6 pb-10 pt-6 sm:min-h-[480px] sm:px-10 lg:min-h-[560px] lg:px-[6%] lg:pt-10">
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
          <div className="mt-auto pt-20 lg:ml-[41%]">
            <h1 className="m-0 text-5xl font-normal leading-none text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.65)] sm:text-6xl md:text-7xl lg:text-8xl">
              Who We Are
            </h1>
            <p className="m-0 mt-5 max-w-sm font-sans text-sm font-bold leading-relaxed text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.7)] sm:text-base">
              The most important thing for us is to give you the comfortable
              dining experience
            </p>
          </div>
        </div>
      </section>

      {/* ================= Our Story ================= */}
      <section className="bg-white">
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 px-6 py-14 sm:px-10 md:grid-cols-2 md:gap-0 md:py-20 lg:px-[7%] lg:py-24">
          <TomatoSketch className="left-[34%] top-[4%] hidden w-[16%] md:block" />

          <div className="md:pr-[14%]">
            <h2 className="m-0 text-5xl font-normal leading-none sm:text-6xl lg:text-7xl">
              Our Story
            </h2>
            <p className="m-0 mt-6 max-w-sm font-sans text-sm leading-relaxed text-black/80 sm:text-base">
              {LOREM}
            </p>
          </div>

          <Pic
            src={IMAGES.story}
            label="Chefs plating dishes in the kitchen"
            className="aspect-[4/3] w-full md:-mt-12"
          />
        </div>
      </section>

      {/* ================= Team ================= */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1400px] gap-x-[8%] gap-y-12 px-6 pb-20 pt-4 sm:px-10 md:grid-cols-2 md:gap-y-10 md:pb-28 md:pt-16 lg:px-[7%]">
          {/* Restaurant Manager */}
          <article className="md:col-start-1 md:row-start-1">
            <h2 className="m-0 text-3xl font-normal leading-tight sm:text-4xl">
              Restaurant Manager
            </h2>
            <p className="m-0 mt-2 font-sans text-xs font-bold sm:text-sm">Carson Huge</p>
            <Pic
              src={IMAGES.manager}
              label="Carson Huge, restaurant manager"
              className="mt-5 aspect-[4/5] w-full"
            />
          </article>

          <p className="m-0 max-w-xs self-start font-sans text-sm leading-relaxed text-black/80 md:col-start-2 md:row-start-1 md:mt-40">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et iti
            nisl in pellentesque rement nunc nisl.
          </p>

          {/* Executive Chef */}
          <article className="md:col-start-2 md:row-start-2 md:mt-20">
            <h2 className="m-0 text-3xl font-normal leading-tight sm:text-4xl md:text-center">
              Executive Chef
            </h2>
            <p className="m-0 mt-2 font-sans text-xs font-bold sm:text-sm md:text-center">
              Jane Cooper
            </p>
            <Pic
              src={IMAGES.chef}
              label="Jane Cooper, executive chef"
              className="mt-5 aspect-[3/4] w-full bg-[#111]"
            />
          </article>

          <p className="m-0 max-w-xs self-end font-sans text-sm leading-relaxed text-black/80 md:col-start-1 md:row-start-2 md:justify-self-end">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et iti
            nisl in pellentesque rement nunc nisl. Augue habitant accumsan, ut
            parturient orci arcu, etiam, eget amet.
          </p>
        </div>
      </section>
      <AboutMore/>
      <Footer />
    </main>
  );
}

import type { ReactNode } from "react";

const IMAGES = {
  leaves: "/assets/h7.png",
  chef: "/assets/h8.png",
};

const DESC =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const menuItems = [
  { price: "$20", title: "Deep Sea Snow White Cod Fillet" },
  { price: "$22", title: "Steak With Rosemary Butter" },
  { price: "$18", title: "Cucumber Salad" },
  { price: "$90", title: "Natural Wine Pairing" },
];

const features: { title: string; icon: ReactNode }[] = [
  {
    title: "Premium Quality",
    icon: (
      <>
        <path d="M3 12c3-5 9-6 13-3l5-3v12l-5-3c-4 3-10 2-13-3z" />
        <circle cx="8" cy="11" r=".6" />
        <path d="M11 9c1 2 1 4 0 6" />
      </>
    ),
  },
  {
    title: "Seasonal Vegetables",
    icon: (
      <>
        <path d="M7 9c3-3 7-3 8 0 1 3-2 8-11 12 3-4 1-9 3-12z" />
        <path d="M15 8l3-4M15 8l5-1M15 8l1 4" />
        <path d="M9 13l2 1M7 16l2 1" />
      </>
    ),
  },
  {
    title: "Fresh Fruit",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="6" />
        <path d="M12 6v12M6 12h12M7.8 7.8l8.4 8.4M16.2 7.8l-8.4 8.4" />
      </>
    ),
  },
];

/* Decorative leaf illustration */
function LineLeaf({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      className={`pointer-events-none absolute fill-none stroke-[#2a3a12]/70 ${className}`}
      strokeWidth="0.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M60 112C20 100 4 66 14 34 22 14 46 6 62 14 80 4 104 16 108 42 114 78 94 104 60 112z" />
      <path d="M60 112C60 80 58 50 62 14" />
      <path d="M60 96C44 92 30 82 22 66M60 80C46 76 34 66 28 52M60 64C50 60 40 52 36 40" />
      <path d="M60 96C76 92 90 82 98 66M60 80C74 76 86 66 92 52M60 64C70 60 80 52 84 40" />
      <path d="M30 70l10 6M24 54l12 6M40 40l8 8M92 70l-10 6M98 54l-12 6M82 40l-8 8" />
    </svg>
  );
}

export default function MenuSection() {
  return (
    <div className="font-rufina text-[#1d2a07]">
      {/* Our Menu */}
      <section className="bg-white">
        <div className="@container relative mx-auto aspect-[357/265] w-full max-w-[1100px] overflow-hidden max-sm:aspect-auto max-sm:px-6 max-sm:py-10">
          <div
            role="img"
            aria-label="Green leaves"
            className="absolute right-0 top-0 h-[32%] w-[42%] bg-contain bg-right-top bg-no-repeat max-sm:hidden"
            style={{ backgroundImage: `url(${IMAGES.leaves})` }}
          />

          <h2 className="absolute left-[7.3%] top-[9%] m-0 text-[length:max(20px,5.2cqw)] font-normal leading-none max-sm:static max-sm:text-3xl">
            Our Menu
          </h2>

          <p className="absolute left-[7.3%] top-[22%] m-0 w-[30%] font-sans text-[length:max(7px,1.1cqw)] leading-[1.5] text-[#1d2a07]/80 max-sm:static max-sm:mt-3 max-sm:w-full max-sm:text-sm">
            This is a section of your menu. Give your section a brief description
          </p>

          <div className="absolute left-[7.3%] right-[7.5%] top-[38%] grid grid-cols-2 items-start gap-x-[6%] gap-y-[2.8cqw] max-sm:static max-sm:mt-7 max-sm:grid-cols-1 max-sm:gap-y-7">
            {menuItems.map((m) => (
              <div key={m.title}>
                <div className="border-b border-dashed border-[#1d2a07] pb-[0.35cqw] text-right text-[length:max(9px,2.3cqw)] leading-none max-sm:text-sm">
                  {m.price}
                </div>

                <h3 className="m-0 mt-[2cqw] text-[length:max(12px,3.1cqw)] font-normal leading-[1.2] max-sm:mt-3 max-sm:text-lg">
                  {m.title}
                </h3>

                <p className="m-0 mt-[1.3cqw] font-sans text-[length:max(7px,1.1cqw)] leading-[1.5] text-[#1d2a07]/80 max-sm:mt-2 max-sm:text-sm">
                  {DESC}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Excellent Cook */}
      <section className="bg-[#e8eee0]">
        <div className="@container relative mx-auto grid aspect-[357/210] w-full max-w-[1100px] grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center gap-[5%] overflow-hidden px-[6%] max-sm:aspect-auto max-sm:grid-cols-1 max-sm:gap-0 max-sm:px-6 max-sm:py-10">
          <LineLeaf className="left-[4%] top-[8%] w-[22%] -rotate-12 max-sm:hidden" />
          <LineLeaf className="right-[4%] bottom-[5%] w-[20%] rotate-[160deg] max-sm:hidden" />

          <div
            role="img"
            aria-label="Chef plating a dish next to a wooden board"
            className="relative order-1 aspect-square w-full bg-[#e8eee0] bg-cover bg-center max-sm:order-2 max-sm:mt-7"
            style={{ backgroundImage: `url(${IMAGES.chef})` }}
          />

          <div className="relative z-10 order-2 max-sm:order-1">
            <h2 className="m-0 text-[clamp(30px,4vw,48px)] font-normal leading-[1.1] max-sm:text-3xl">
              Excellent cook
            </h2>
            <p className="m-0 mt-5 font-sans text-[clamp(14px,1.25vw,17px)] leading-[1.65] text-[#1d2a07]/80 max-sm:mt-3 max-sm:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet. Tempis egestas ullamcorper purus
              auctor tincidunt lacus nunc.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white">
        <div className="@container relative mx-auto aspect-[357/176] w-full max-w-[1100px] max-sm:aspect-auto max-sm:grid max-sm:grid-cols-1 max-sm:gap-7 max-sm:px-6 max-sm:py-10">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="absolute top-[21%] flex w-[28%] -translate-x-1/2 flex-col items-center text-center max-sm:static max-sm:w-full max-sm:translate-x-0"
              style={{ left: `${[20.4, 49.9, 79.3][i]}%` }}
            >
              <div className="flex aspect-square w-[44%] items-center justify-center rounded-full bg-[#e8eee0] sm:w-[44%] max-sm:w-20">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-[46%] fill-none stroke-[#1d2a07] stroke-[1.5]"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {f.icon}
                </svg>
              </div>

              <h3 className="m-0 mt-[3.5cqw] text-[length:max(9px,2.3cqw)] font-bold leading-tight max-sm:mt-3 max-sm:text-base">
                {f.title}
              </h3>

              <p className="m-0 mt-[1.5cqw] w-[78%] font-sans text-[length:max(7px,1.1cqw)] leading-[1.5] text-[#1d2a07]/80 max-sm:mt-2 max-sm:w-full max-sm:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                congue arcu
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

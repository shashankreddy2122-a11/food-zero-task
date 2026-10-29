import MenuMore from "./MenuMore";
import Footer from "../footer/Footer";

const IMAGES = {
  hero: "/assets/s4.png",
  starter: "/assets/s1.png",
};

const starters = [
  { price: "$20", title: "Grilled Okra and Tomatoes" },
  { price: "$18", title: "Cucumber Salad" },
  { price: "$12", title: "Basil Pancakes" },
];

const DESC =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

type MenuPageProps = {
  onBack?: () => void;
  onReservationClick?: () => void;
};

/* Decorative berry branch */
function BerryBranch({ className }: { className: string }) {
  const leaf = "M0 0 C6 -9 20 -9 28 0 C20 9 6 9 0 0Z";

  return (
    <svg
      viewBox="0 0 140 122"
      aria-hidden="true"
      className={`pointer-events-none absolute fill-none stroke-[#1d2a07] ${className}`}
      strokeWidth="0.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <g id="berry-flower">
          <circle r="1.6" />
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse
              key={a}
              cx="0"
              cy="-4.2"
              rx="2.2"
              ry="2.9"
              transform={`rotate(${a})`}
            />
          ))}
        </g>
      </defs>

      <path d="M140 4C112 4 86 14 68 38 60 50 56 62 60 74" />
      <path d="M60 74C44 78 32 86 26 98M60 74C70 74 82 72 92 70M92 70C102 66 110 58 114 52" />

      {[
        { x: 96, y: 18, r: 160 },
        { x: 78, y: 28, r: -150 },
        { x: 112, y: 8, r: 20 },
        { x: 74, y: 52, r: 205 },
      ].map((l, i) => (
        <g
          key={i}
          transform={`translate(${l.x} ${l.y}) rotate(${l.r})`}
        >
          <path d={leaf} />
          <path d="M0 0L26 0" />
        </g>
      ))}

      {[
        { x: 24, y: 100, r: 15 },
        { x: 58, y: 88, r: 13 },
        { x: 92, y: 74, r: 15 },
        { x: 118, y: 52, r: 12 },
      ].map((b, i) => (
        <g key={i}>
          <circle cx={b.x} cy={b.y} r={b.r} />
          <use href="#berry-flower" x={b.x} y={b.y} />
        </g>
      ))}
    </svg>
  );
}

export default function MenuPage({ onBack, onReservationClick }: MenuPageProps) {
  return (
    <main className="min-h-screen bg-white font-rufina text-black">
      {/* Hero */}
      <section className="relative min-h-[380px] w-full overflow-hidden bg-[#6b6b5a] sm:min-h-[430px] lg:min-h-[510px]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55"
        />

        {/* Header */}
        <header className="relative mx-auto flex max-w-[1200px] items-center justify-between px-6 pt-5 sm:px-10 lg:px-[6%] lg:pt-8">
          <div className="flex items-center gap-4 sm:gap-5">
            <button
              type="button"
              aria-label="Back to navigation"
              onClick={onBack}
              className="flex cursor-pointer items-center border-0 bg-transparent p-1 text-white transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <svg
                viewBox="0 0 24 12"
                aria-hidden="true"
                className="w-5 -scale-x-100 fill-none stroke-current stroke-[1.4] sm:w-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 6h21M17 1l5 5-5 5" />
              </svg>
            </button>

            <a
              href="#home"
              className="relative inline-block px-1 text-xl font-normal leading-none text-white no-underline [text-shadow:0_1px_6px_rgba(0,0,0,0.6)] sm:text-2xl lg:text-3xl"
            >
              <span
                aria-hidden="true"
                className="absolute -top-[12%] left-[18%] right-[19%] h-[135%] border border-white/80"
              />
              <span className="relative">FoodZero</span>
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-5">
            <a
              href="tel:+8685234600"
              className="hidden font-sans text-[10px] text-white no-underline sm:block lg:text-xs"
            >
              +86 852 346 000
            </a>

            <a
              href="#reservations"
              onClick={(event) => {
                event.preventDefault();
                onReservationClick?.();
              }}
              className="border border-white/80 px-3 py-1.5 font-sans text-[9px] text-white no-underline transition-colors hover:bg-white hover:text-[#223403] sm:px-4 sm:py-2 sm:text-xs"
            >
              Reservations
            </a>
          </div>
        </header>

        {/* Hero title */}
        <div className="relative mx-auto flex max-w-[1200px] flex-col px-6 pb-8 pt-16 sm:px-10 sm:pt-20 lg:px-[6%]">
          <h1 className="m-0 w-[70%] text-[length:clamp(28px,4.3vw,54px)] font-normal leading-[1.1] text-white lg:w-[60%]">
            View Our
            <br />
            New Menu
          </h1>
        </div>
      </section>

      {/* Starters */}
      <section className="bg-white">
        <div className="@container relative mx-auto aspect-[575/463] w-full max-w-[1200px] overflow-hidden max-sm:aspect-auto max-sm:overflow-visible max-sm:px-6 max-sm:py-11">
          <BerryBranch className="left-[72%] top-0 w-[22%] max-sm:hidden" />

          <h2 className="absolute inset-x-0 top-[8.3%] m-0 text-center text-[length:max(20px,4.5cqw)] font-normal leading-none max-sm:static max-sm:text-3xl">
            Starters
          </h2>

          <p className="absolute inset-x-0 top-[17%] m-0 text-center font-sans text-[length:max(6px,1.05cqw)] leading-relaxed text-black/80 max-sm:static max-sm:mt-3 max-sm:text-xs">
            This is a section of your menu. Give your section a brief description
          </p>

          {/* Starter image */}
          <div
            role="img"
            aria-label="Tomato and mozzarella salad with basil"
            className="absolute left-[7.5%] top-[25%] h-[60%] w-[39%] bg-[#e6e6e6] bg-cover bg-center max-sm:relative max-sm:left-auto max-sm:top-auto max-sm:mt-7 max-sm:aspect-[4/3] max-sm:h-auto max-sm:w-full"
            style={{ backgroundImage: `url(${IMAGES.starter})` }}
          />

          {/* Starter menu items */}
          <div className="absolute left-[53.5%] right-[9.9%] top-[25.5%] max-sm:static max-sm:mt-7 max-sm:w-full">
            {starters.map((s) => (
              <div
                key={s.title}
                className="mb-[2.8cqw] last:mb-0 max-sm:mb-5"
              >
                <div className="border-b border-dotted border-black pb-[0.4cqw] text-right text-[length:max(9px,2.2cqw)] leading-none max-sm:text-sm">
                  {s.price}
                </div>

                <h3 className="m-0 mt-[1.4cqw] text-[length:max(12px,3cqw)] font-normal leading-[1.28] max-sm:mt-3 max-sm:text-lg">
                  {s.title}
                </h3>

                <p className="m-0 mt-[0.8cqw] font-sans text-[length:max(6px,1.05cqw)] leading-[1.5] text-black/80 max-sm:mt-2 max-sm:text-xs">
                  {DESC}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MenuMore />
      <Footer />
    </main>
  );
}


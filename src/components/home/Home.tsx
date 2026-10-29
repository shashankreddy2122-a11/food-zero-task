import MenuSection from "./MenuSection";
import JournalSection from "./JournalSection";
import Footer from "../footer/Footer";

const IMAGES = {
  steak: "/assets/h1.png",
  spice1: "/assets/h2.png",
  spice2: "/assets/h3.png",
  spice3: "/assets/h4.png",
  soup: "/assets/h5.png",
  mills: "/assets/h6.png",
};

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu";

type HomeProps = {
  onMenuClick?: () => void;
  onReservationClick?: () => void;
};

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
      className={`absolute bg-[#3a4a24] bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}

export default function Home({ onMenuClick, onReservationClick }: HomeProps) {
  return (
    <main className="min-h-screen bg-[#223403] font-rufina text-white">
      {/* Main page canvas */}
      <div className="@container relative mx-auto aspect-[502/717] w-full max-w-[1100px]">
        {/* Header */}
        <header className="absolute left-[6%] right-[6.6%] top-[2%] z-20 flex items-center justify-between">
          <div className="flex items-center gap-[2.5cqw]">
            <button
              type="button"
              aria-label="Go back"
              onClick={onMenuClick}
              className="flex cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-6 fill-none stroke-current stroke-2 sm:size-7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
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
              className="border border-white/80 px-2.5 py-1.5 font-sans text-[9px] text-white no-underline transition-colors hover:bg-white hover:text-[#223403] sm:px-4 sm:py-2 sm:text-xs"
            >
              Reservations
            </a>
          </div>
        </header>

        {/* Hero image */}
        <Pic
          src={IMAGES.steak}
          label="Steak with herbs on a white plate"
          className="left-[53%] top-[16.5%] z-0 h-[31.5%] w-[39.5%]"
        />

        {/* Hero heading */}
        <h1 className="absolute left-[7.2%] top-[11.5%] z-10 m-0 w-[66%] text-[length:6.1cqw] font-normal leading-[1.15]">
          Healthy Eating is important part of lifestyle
        </h1>

        <p className="absolute left-[7.2%] top-[30%] z-10 m-0 w-[29%] font-sans text-[length:max(7px,1cqw)] leading-[1.8] text-white/90">
          {LOREM}
        </p>

        {/* Scroll indicator */}
        <div className="absolute left-[7.8%] top-[34%] z-10 flex flex-col items-center">
          <span
            className="text-[length:max(9px,2.2cqw)] leading-none"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
        </div>

        <div
          aria-hidden="true"
          className="absolute left-[8.5%] top-[39.7%] h-[13%] border-l border-dashed border-white/80"
        />

        {/* Spice images */}
        {[
          {
            src: IMAGES.spice1,
            left: "left-[34.5%]",
            label: "Bowl of ground spice",
          },
          {
            src: IMAGES.spice2,
            left: "left-[49.8%]",
            label: "Bowl of peppercorns",
          },
          {
            src: IMAGES.spice3,
            left: "left-[65.1%]",
            label: "Bowl of brown spice",
          },
        ].map((b) => (
          <Pic
            key={b.label}
            src={b.src}
            label={b.label}
            className={`${b.left} top-[43%] z-10 aspect-square w-[11.5%] rounded-full border-2 border-white`}
          />
        ))}

        {/* Lower section image */}
        <Pic
          src={IMAGES.soup}
          label="Bowl of clam chowder"
          className="left-[7.2%] top-[60.4%] h-[19%] w-[39%]"
        />

        {/* Lower section heading */}
        <h2 className="absolute left-[7.2%] top-[81.8%] m-0 w-[43%] text-[length:max(13px,3cqw)] font-normal leading-[1.25]">
          Start to plan your diet today
        </h2>

        <p className="absolute left-[7.2%] top-[89.5%] m-0 w-[29%] font-sans text-[length:max(7px,1cqw)] leading-[1.8] text-white/90">
          {LOREM}
        </p>

        <p className="absolute left-[66.7%] top-[60.4%] m-0 w-[26%] font-sans text-[length:max(7px,1cqw)] leading-[1.8] text-white/90">
          {LOREM}
        </p>

        {/* Salt and pepper image */}
        <Pic
          src={IMAGES.mills}
          label="Salt and pepper mills"
          className="left-[66.7%] top-[66.5%] h-[23.5%] w-[25.5%]"
        />
      </div>

      <MenuSection />
      <JournalSection />
      <Footer />
    </main>
  );
}

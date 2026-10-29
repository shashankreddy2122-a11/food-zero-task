import Footer from "../footer/Footer";
import { ArrowLeft } from "lucide-react";

/* Images from public/images/ */
const IMAGES = {
  hero: "/assets/t1.png",
  table: "/assets/t2.png",
  building: "/assets/t3.png",
};

const hours = [
  { name: "Brunch", time: "11:00-15:00" },
  { name: "Lunch", time: "13:00-17:00" },
  { name: "Dinner", time: "18:00-23:00" },
];

const fieldBase =
  "absolute h-[6.5%] min-h-[24px] border border-black/70 bg-transparent px-[2%] font-sans text-[length:max(7px,1.4cqw)] text-black outline-none placeholder:text-black focus-visible:ring-1 focus-visible:ring-black";

type ContactPageProps = {
  onMenuClick?: () => void;
  onReservationClick?: () => void;
};

/* Decorative lemon illustration */
function LemonSketch({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={`pointer-events-none absolute fill-none stroke-black/70 ${className}`}
      strokeWidth="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 54C12 30 32 14 54 16c8 8 8 18 4 28-6 14-22 24-38 24-6-4-8-8-8-14z" />
      <path d="M54 16C60 10 70 8 76 12" />
      <circle cx="62" cy="62" r="24" />
      <circle cx="62" cy="62" r="19" />
      <path d="M62 43v38M43 62h38M49 49l26 26M75 49L49 75" />
      <path d="M78 22c6-2 12 0 16 4-6 4-12 4-16-4z" />
      <path d="M86 12l2 6M92 20l6-2" />
    </svg>
  );
}

/* Decorative leaf illustration */
function LeafSketch({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 100 80"
      aria-hidden="true"
      className={`pointer-events-none absolute fill-none stroke-black/70 ${className}`}
      strokeWidth="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 70C6 40 24 18 50 14c10-8 26-6 32 6 10 2 14 14 8 24-4 8-12 10-20 8-8 10-26 14-40 8" />
      <path d="M8 70C30 54 50 38 74 22" />
      <path d="M30 56c-6-10-4-22 4-30M44 46c-2-10 2-18 10-24M58 36c2-6 8-10 14-10" />
      <path d="M36 60c8 2 16 0 22-6M50 52c8 0 14-4 18-10" />
    </svg>
  );
}

export default function ContactPage({ onMenuClick, onReservationClick }: ContactPageProps) {
  return (
    <main className="min-h-screen bg-white font-rufina text-black">
      {/* ================= Hero ================= */}
      <section className="relative min-h-[370px] w-full overflow-hidden bg-[#3a4a24] sm:min-h-[420px] lg:min-h-[490px]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/25"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/30"
        />

        {/* Header */}
        <header className="relative mx-auto flex max-w-[1200px] items-center justify-between px-5 pt-5 sm:px-8 lg:px-[6%] lg:pt-8">
          <div className="flex items-center gap-3">
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

        {/* Hero title */}
        <div className="relative mx-auto flex max-w-[1200px] flex-col px-5 pb-8 pt-16 sm:px-8 lg:px-[6%] lg:pt-20">
          <h1 className="m-0 text-[length:clamp(28px,4.3vw,52px)] font-normal leading-none text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.65)]">
            Get in Touch
          </h1>

          <p className="m-0 mt-3 font-sans text-xs font-bold leading-relaxed text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.7)] sm:text-sm">
            The freshest ingredients for you every day
          </p>

          {/* Opening hours */}
          <div className="mt-6 text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.7)]">
            <div className="flex items-baseline justify-between">
              <span className="text-base leading-none sm:text-lg">
                Open Time
              </span>
              <span className="font-sans text-xs leading-none sm:text-sm">
                Sunday - Friday
              </span>
            </div>

            <div className="mt-3 border-t border-dotted border-white/80" />

            <div className="mt-3 flex gap-6 font-sans sm:gap-8">
              {hours.map((hour) => (
                <div key={hour.name}>
                  <div className="text-[length:max(7px,1.2cqw)] leading-none">
                    {hour.name}
                  </div>
                  <div className="mt-2 text-[length:max(8px,1.35cqw)] leading-none">
                    {hour.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= Contact details + location ================= */}
      <section className="bg-white">
        <div className="@container relative mx-auto aspect-[348/365] w-full max-w-[1200px] overflow-hidden max-[768px]:aspect-auto max-[768px]:overflow-visible max-[768px]:px-5 max-[768px]:py-9">
          <LemonSketch className="left-[39.4%] top-[5.5%] w-[20%] max-[768px]:hidden" />

          <div
            role="img"
            aria-label="Table set with plates, glasses and lemons"
            className="absolute left-[7%] top-[12%] h-[26%] w-[39%] bg-[#d8dcd0] bg-cover bg-center max-[768px]:relative max-[768px]:left-auto max-[768px]:top-auto max-[768px]:aspect-[4/3] max-[768px]:h-auto max-[768px]:w-full"
            style={{ backgroundImage: `url(${IMAGES.table})` }}
          />

          <p className="absolute left-[57%] top-[28%] m-0 w-[36%] text-[length:max(8px,1.65cqw)] leading-[1.55] max-[768px]:static max-[768px]:mt-5 max-[768px]:w-full max-[768px]:text-sm">
            We can be contacted via
            <br />
            email{" "}
            <a
              href="mailto:info@foodzero.com"
              className="text-[#5a6a00] no-underline"
            >
              info@foodzero.com
            </a>
            <br />
            or telephone on{" "}
            <a
              href="tel:+8685234600"
              className="text-[#5a6a00] no-underline"
            >
              +86 852 346 000
            </a>
          </p>

          <div
            role="img"
            aria-label="Glass restaurant building surrounded by trees"
            className="absolute left-[51%] top-[45%] h-[42%] w-[39%] bg-[#cfd8c0] bg-cover bg-center max-[768px]:relative max-[768px]:left-auto max-[768px]:top-auto max-[768px]:mt-7 max-[768px]:aspect-[4/3] max-[768px]:h-auto max-[768px]:w-full"
            style={{ backgroundImage: `url(${IMAGES.building})` }}
          />

          <p className="absolute left-[9%] top-[65%] m-0 w-[36%] text-[length:max(8px,1.65cqw)] leading-[1.5] max-[768px]:static max-[768px]:mt-5 max-[768px]:w-full max-[768px]:text-sm">
            We are located in 1959 Sepulveda Blvd. Culver City, CA. 90230
          </p>

          <a
            href="https://maps.google.com/?q=1959+Sepulveda+Blvd+Culver+City+CA+90230"
            target="_blank"
            rel="noreferrer"
            className="absolute left-[9%] top-[72%] flex h-[4.2%] min-h-[23px] w-[15.5%] min-w-[70px] items-center justify-center border border-black/80 font-sans text-[length:max(7px,1.35cqw)] text-black no-underline transition-colors hover:bg-black hover:text-white max-[768px]:static max-[768px]:mt-3 max-[768px]:h-10 max-[768px]:w-full max-[768px]:text-xs"
          >
            View in maps
          </a>
        </div>
      </section>

      {/* ================= Make a Reservation ================= */}
      <section id="reservations" className="bg-[#e8eee0]">
        <div className="@container relative mx-auto aspect-[348/225] w-full max-w-[1200px] max-[768px]:aspect-auto max-[768px]:px-5 max-[768px]:py-9">
          <LeafSketch className="left-[8%] top-[2.4%] w-[21%] max-[768px]:hidden" />

          <h2 className="absolute left-[24%] top-[15.8%] m-0 text-[length:max(18px,5cqw)] font-normal leading-none max-[768px]:static max-[768px]:text-2xl">
            Make a Reservation
          </h2>

          <p className="absolute left-[24%] top-[27%] m-0 font-sans text-[length:max(7px,1cqw)] leading-none text-black/80 max-[768px]:static max-[768px]:mt-3 max-[768px]:text-xs">
            Get in touch with restaurant
          </p>

          <form
            className="contents max-[768px]:mt-6 max-[768px]:flex max-[768px]:flex-col max-[768px]:gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Table booked!");
            }}
          >
            <input
              type="text"
              placeholder="First Name"
              aria-label="First name"
              className={`${fieldBase} left-[7%] top-[36.4%] w-[39%] max-[768px]:static max-[768px]:h-11 max-[768px]:min-h-0 max-[768px]:w-full`}
            />

            <input
              type="text"
              placeholder="Last Name"
              aria-label="Last name"
              className={`${fieldBase} left-[51%] top-[36.4%] w-[39%] max-[768px]:static max-[768px]:h-11 max-[768px]:min-h-0 max-[768px]:w-full`}
            />

            <input
              type="email"
              placeholder="Email"
              aria-label="Email"
              className={`${fieldBase} left-[7%] top-[47%] w-[83%] max-[768px]:static max-[768px]:h-11 max-[768px]:min-h-0 max-[768px]:w-full`}
            />

            <input
              type="tel"
              placeholder="Phone"
              aria-label="Phone"
              className={`${fieldBase} left-[7%] top-[57.1%] w-[83%] max-[768px]:static max-[768px]:h-11 max-[768px]:min-h-0 max-[768px]:w-full`}
            />

            <input
              type="date"
              aria-label="Date"
              defaultValue="2027-02-16"
              className={`${fieldBase} left-[7%] top-[67.6%] w-[39%] max-[768px]:static max-[768px]:h-11 max-[768px]:min-h-0 max-[768px]:w-full`}
            />

            <select
              aria-label="Time"
              defaultValue="6:00 pm"
              className={`${fieldBase} left-[51%] top-[67.6%] w-[39%] max-[768px]:static max-[768px]:h-11 max-[768px]:min-h-0 max-[768px]:w-full`}
            >
              {[
                "12:00 pm",
                "1:00 pm",
                "6:00 pm",
                "7:00 pm",
                "8:00 pm",
                "9:00 pm",
              ].map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>

            <select
              aria-label="Number of people"
              defaultValue="2 Person"
              className={`${fieldBase} left-[7%] top-[78.1%] w-[83%] max-[768px]:static max-[768px]:h-11 max-[768px]:min-h-0 max-[768px]:w-full`}
            >
              {[
                "1 Person",
                "2 Person",
                "3 Person",
                "4 Person",
                "5+ Person",
              ].map((people) => (
                <option key={people}>{people}</option>
              ))}
            </select>

            <button
              type="submit"
              className="absolute left-1/2 top-[91%] h-[6.5%] min-h-[24px] w-[16%] min-w-[75px] -translate-x-1/2 cursor-pointer border-0 bg-[#5a6a00] font-sans text-[length:max(7px,1.4cqw)] text-white transition-colors hover:bg-[#6c7e08] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5a6a00] max-[768px]:static max-[768px]:mt-2 max-[768px]:h-11 max-[768px]:min-h-0 max-[768px]:w-full max-[768px]:min-w-0 max-[768px]:translate-x-0 max-[768px]:text-sm"
            >
              Book Now
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

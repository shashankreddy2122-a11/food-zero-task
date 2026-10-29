import { useState } from "react";

/* Images */
const IMAGES = {
  blog1: "/assets/h9.png",
  blog2: "/assets/h10.png",
  author1: "/assets/h14.png",
  author2: "/assets/h15.png",
  starters: "/assets/h11.png",
  mains: "/assets/h12.png",
  soups: "/assets/h13.png",
  person: "/assets/h16.png",
};

const DESC =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const posts = [
  {
    image: IMAGES.blog1,
    author: IMAGES.author1,
    title: "Fruit and vegetables and protection against diseases",
  },
  {
    image: IMAGES.blog2,
    author: IMAGES.author2,
    title: "Asparagus Spring Salad with Rocket, Goat's Cheese",
  },
];

const categories = [
  { label: "Starters", image: IMAGES.starters },
  { label: "Mains", image: IMAGES.mains },
  { label: "Soups", image: IMAGES.soups },
];

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ullamcorper purus. Lorem ipsum dolor sit amet.",
    name: "John Doe",
    role: "Role",
    image: IMAGES.person,
  },
  {
    quote:
      "Neque congue arcu, vitae pharetra lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.",
    name: "Jane Smith",
    role: "Guest",
    image: IMAGES.person,
  },
  {
    quote:
      "Turpis egestas ultricies purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu, vitae pharetra lectus.",
    name: "Alex Brown",
    role: "Chef",
    image: IMAGES.person,
  },
];

/* Arrow */
function Arrow({
  dir = "right",
  className = "",
}: {
  dir?: "right" | "left";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 12"
      aria-hidden="true"
      className={`fill-none stroke-current stroke-[1.4] ${
        dir === "left" ? "-scale-x-100" : ""
      } ${className}`}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 6h21M17 1l5 5-5 5" />
    </svg>
  );
}

/* Image component */
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

/* Form input styling */
const fieldClass =
  "h-[6.6cqw] min-h-[24px] w-full border border-[#1d2a07]/70 bg-transparent px-[1.8cqw] font-sans text-[length:max(7px,1.6cqw)] text-[#1d2a07] outline-none focus-visible:border-[#1d2a07] focus-visible:ring-1 focus-visible:ring-[#1d2a07]";

export default function JournalSection() {
  const [slide, setSlide] = useState(0);
  const t = testimonials[slide];

  const prev = () =>
    setSlide((s) => (s - 1 + testimonials.length) % testimonials.length);

  const next = () =>
    setSlide((s) => (s + 1) % testimonials.length);

  return (
    <div className="font-rufina text-[#1d2a07]">
      {/* Blog cards */}
      <section className="bg-white">
        <div className="@container mx-auto w-full max-w-[1100px] px-[7.7cqw] pb-[9cqw] pt-[9.5cqw]">
          <div className="grid grid-cols-2 gap-x-[2.8cqw]">
            {posts.map((p) => (
              <article key={p.title}>
                <div className="relative">
                  <Pic
                    src={p.image}
                    label={p.title}
                    className="aspect-[133/131] w-full"
                  />

                  <span className="absolute right-0 top-0 bg-[#4a5a00] px-[2.8cqw] py-[0.8cqw] font-sans text-[length:max(6px,1.4cqw)] text-white">
                    Fashion
                  </span>
                </div>

                <div className="mt-[3.8cqw] flex items-center gap-[1.3cqw] font-sans text-[length:max(6px,1.2cqw)] text-[#4a5a00]">
                  <span
                    role="img"
                    aria-label="Author"
                    className="size-[4.8cqw] min-h-3.5 min-w-3.5 shrink-0 rounded-full bg-[#cfd8c0] bg-cover bg-center"
                    style={{ backgroundImage: `url(${p.author})` }}
                  />
                  <span>Julia Wilson</span>
                  <span aria-hidden="true">•</span>
                  <span>October 17, 2021</span>
                  <span aria-hidden="true">•</span>
                  <span>6 Days</span>
                  <span aria-hidden="true">•</span>
                  <span>0 comments</span>
                </div>

                <h3 className="m-0 mt-[2cqw] text-[length:max(11px,2.9cqw)] font-normal leading-[1.28]">
                  {p.title}
                </h3>

                <div className="mt-[1.3cqw] border-t border-dashed border-[#1d2a07]/70" />

                <p className="m-0 mt-[1.5cqw] font-sans text-[length:max(6px,1.2cqw)] leading-[1.5] text-[#1d2a07]/80">
                  {DESC}
                </p>

                <a
                  href="#read-more"
                  className="mt-[1.8cqw] inline-flex items-center gap-[1cqw] font-sans text-[length:max(6px,1.3cqw)] text-[#1d2a07] no-underline"
                >
                  Read More
                  <Arrow className="w-[3cqw] min-w-3" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Make a Reservation */}
      <section className="bg-[#e8eee0]">
        <div className="@container mx-auto w-full max-w-[1100px] px-[7.7cqw] pb-[11cqw] pt-[12cqw]">
          <h2 className="m-0 text-center text-[length:max(18px,4.8cqw)] font-normal leading-none">
            Make a Reservation
          </h2>

          <p className="m-0 mt-[2.8cqw] text-center font-sans text-[length:max(6px,1.2cqw)] text-[#1d2a07]/80">
            Get in touch with restaurant
          </p>

          <form
            className="mt-[7cqw]"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Table booked!");
            }}
          >
            <div className="grid grid-cols-3 gap-[2.3cqw]">
              <input
                type="date"
                aria-label="Date"
                defaultValue="2027-01-14"
                className={fieldClass}
              />

              <select
                aria-label="Time"
                defaultValue="6:00 pm"
                className={fieldClass}
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
                className={fieldClass}
              >
                {[
                  "1 Person",
                  "2 Person",
                  "3 Person",
                  "4 Person",
                  "5+ Person",
                ].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>

            <div className="mt-[6.2cqw] text-center">
              <button
                type="submit"
                className="cursor-pointer border-0 bg-[#223403] px-[5.8cqw] py-[1.9cqw] font-sans text-[length:max(7px,1.6cqw)] text-white transition-colors hover:bg-[#33500a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#223403]"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Calories and testimonial */}
      <section className="bg-white">
        <div className="@container mx-auto w-full max-w-[1100px] px-[7.7cqw] pb-[8cqw] pt-[8cqw]">
          <h2 className="m-0 text-center text-[length:max(20px,5.2cqw)] font-normal leading-[1.1]">
            Calories Energy
            <br />
            Balance
          </h2>

          <p className="m-0 mt-[3cqw] text-center font-sans text-[length:max(6px,1.2cqw)] text-[#1d2a07]/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* Food category cards */}
          <div className="mt-[6.2cqw] grid grid-cols-3 gap-[2.8cqw]">
            {categories.map((c) => (
              <a
                key={c.label}
                href={`#${c.label.toLowerCase()}`}
                className="relative block aspect-[85/119] no-underline"
              >
                <Pic
                  src={c.image}
                  label={c.label}
                  className="absolute inset-0"
                />

                <span className="absolute left-[7%] top-[5%] text-[length:max(9px,2.4cqw)] text-[#1d2a07]">
                  {c.label}
                </span>

                <Arrow className="absolute right-[7%] top-[7%] w-[3.4cqw] min-w-3.5 text-[#1d2a07]" />
              </a>
            ))}
          </div>

          {/* Testimonial slider */}
          <div className="relative mt-[10cqw]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-[4cqw] right-[6cqw] select-none text-[length:max(50px,16cqw)] leading-none text-[#1d2a07]/10"
            >
              ”
            </span>

            <p className="relative m-0 w-[92%] text-[length:max(10px,2.4cqw)] leading-[1.32]">
              " {t.quote}
            </p>

            <div className="mt-[5cqw] flex items-center justify-between">
              <div className="flex items-center gap-[2.2cqw]">
                <span
                  role="img"
                  aria-label={t.name}
                  className="size-[7.5cqw] min-h-7 min-w-7 rounded-full bg-[#cfd8c0] bg-cover bg-center"
                  style={{ backgroundImage: `url(${t.image})` }}
                />

                <div className="leading-tight">
                  <div className="font-sans text-[length:max(7px,1.6cqw)] font-bold">
                    {t.name}
                  </div>

                  <div className="font-sans text-[length:max(6px,1.2cqw)] text-[#1d2a07]/70">
                    {t.role}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-[1.8cqw] font-sans text-[length:max(7px,1.4cqw)]">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={prev}
                  className="flex cursor-pointer border-0 bg-transparent p-1 text-[#1d2a07] focus-visible:outline-2 focus-visible:outline-[#1d2a07]"
                >
                  <Arrow dir="left" className="w-[3cqw] min-w-3.5" />
                </button>

                <span aria-live="polite">
                  {slide + 1} / {testimonials.length}
                </span>

                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={next}
                  className="flex cursor-pointer border-0 bg-transparent p-1 text-[#1d2a07] focus-visible:outline-2 focus-visible:outline-[#1d2a07]"
                >
                  <Arrow className="w-[3cqw] min-w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

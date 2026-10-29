import { useEffect, useState } from "react";
/* 👇 Put your files in public/images/ (and public/videos/) and change the names here. */
const IMAGES = {
  banner: "/assets/a5.png",
  slice: "/assets/a6.png",
  pickled: "/assets/a7.png",
  bake: "/assets/a8.png",
};
const VIDEO_SRC = "/assets/a5.png";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultrices purus. Convallis pellentesque quis, at felis dictum nam nunc, arcu dolor nam etiam.";
const SHORT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.";

const timeOptions = ["12:00 pm", "1:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm"];
const personOptions = ["1 Person", "2 Person", "3 Person", "4 Person", "5+ Person"];

const fieldClass =
  "h-11 w-full border border-black/70 bg-transparent px-4 font-sans text-sm text-black outline-none focus-visible:ring-1 focus-visible:ring-black sm:h-12";

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

/* Hand-drawn style rosemary sprig */
function Sprig({ className }: { className: string }) {
  const leaves = Array.from({ length: 9 }, (_, i) => i);
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={`pointer-events-none absolute fill-none stroke-[#5a6a2a]/80 ${className}`}
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M96 4C70 24 44 56 8 96" />
      {leaves.map((i) => {
        const t = 0.1 + i * 0.1;
        const x = 96 - 88 * t;
        const y = 4 + 92 * t;
        return (
          <g key={i}>
            <path d={`M${x} ${y} q-14 -14 -26 -10`} />
            <path d={`M${x} ${y} q8 14 22 14`} />
          </g>
        );
      })}
    </svg>
  );
}

const steps = [
  { no: "01.", title: "Slice", text: LOREM },
  { no: "02.", title: "Pickled", text: SHORT },
  { no: "03.", title: "Bake", text: SHORT },
];

export default function AboutMore() {
  const [playing, setPlaying] = useState(false);

  /* close the video with the Escape key */
  useEffect(() => {
    if (!playing) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPlaying(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [playing]);

  return (
    <div className="font-rufina text-black">
      {/* ================= Video banner ================= */}
      <section className="relative isolate overflow-hidden bg-[#3a4a24] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.banner})` }}
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#2f3d12]/70" />

        <div className="mx-auto flex max-w-[1400px] flex-col items-center px-6 py-16 text-center sm:py-24 lg:py-28">
          <h2 className="m-0 text-4xl font-normal leading-none [text-shadow:0_2px_12px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl">
            It looks delicious
          </h2>
          <p className="m-0 mt-4 font-sans text-xs sm:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button
            type="button"
            aria-label="Play video"
            onClick={() => setPlaying(true)}
            className="mt-8 flex size-14 cursor-pointer items-center justify-center rounded-full border border-white bg-transparent text-white transition-colors hover:bg-white hover:text-[#2f3d12] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:size-16"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-[1.5]" strokeLinejoin="round">
              <path d="M8 5l11 7-11 7z" />
            </svg>
          </button>
        </div>
      </section>

      {/* Video pop-up */}
      {playing && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setPlaying(false)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <video src={VIDEO_SRC} controls autoPlay className="aspect-video w-full bg-black" />
            <button
              type="button"
              onClick={() => setPlaying(false)}
              className="absolute -top-10 right-0 cursor-pointer border-0 bg-transparent font-sans text-sm text-white focus-visible:outline-2 focus-visible:outline-white"
            >
              Close ✕
            </button>
          </div>
        </div>
      )}

      {/* ================= Sophisticated Process ================= */}
      <section className="relative overflow-hidden bg-white">
        <Sprig className="-right-6 -top-4 hidden w-40 md:block lg:w-56" />
        <Sprig className="-bottom-4 -left-8 hidden w-36 rotate-[200deg] md:block lg:w-48" />

        <div className="relative mx-auto max-w-[1400px] px-6 py-14 sm:px-10 md:py-20 lg:px-[7%] lg:py-24">
          <h2 className="m-0 text-center text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
            Sophisticated Process
          </h2>

          <div className="mt-12 grid gap-x-[6%] gap-y-14 md:mt-16 md:grid-cols-2">
            {/* 01 Slice – picture left, text right */}
            <Pic
              src={IMAGES.slice}
              label="Chef slicing a rack of meat"
              className="aspect-[4/3] w-full md:col-start-1 md:row-start-1"
            />
            <div className="self-center md:col-start-2 md:row-start-1">
              <h3 className="m-0 text-3xl font-normal leading-none sm:text-4xl">
                {steps[0].no}
                {steps[0].title}
              </h3>
              <p className="m-0 mt-4 max-w-sm font-sans text-sm leading-relaxed text-black/80">
                {steps[0].text}
              </p>
            </div>

            {/* 02 Pickled – picture top, text below (right column) */}
            <div className="md:col-start-2 md:row-start-2 md:mt-10">
              <Pic
                src={IMAGES.pickled}
                label="Raw steak with rosemary and salt"
                className="aspect-[4/3] w-full"
              />
              <h3 className="m-0 mt-6 text-3xl font-normal leading-none sm:text-4xl">
                {steps[1].no}
                {steps[1].title}
              </h3>
              <p className="m-0 mt-4 max-w-xs font-sans text-sm leading-relaxed text-black/80">
                {steps[1].text}
              </p>
            </div>

            {/* 03 Bake – text top, picture below (left column) */}
            <div className="md:col-start-1 md:row-start-2 md:mt-40">
              <h3 className="m-0 text-3xl font-normal leading-none sm:text-4xl">
                {steps[2].no}
                {steps[2].title}
              </h3>
              <p className="m-0 mt-4 max-w-xs font-sans text-sm leading-relaxed text-black/80">
                {steps[2].text}
              </p>
              <Pic
                src={IMAGES.bake}
                label="Meat roasting over open flames"
                className="mt-6 aspect-[4/3] w-full md:w-[80%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= Make a Reservation ================= */}
      <section id="reservations" className="bg-[#e8eee0]">
        <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 md:py-20 lg:px-[7%] lg:py-24">
          <div className="text-center">
            <h2 className="m-0 text-4xl font-normal leading-none sm:text-5xl lg:text-6xl">
              Make a Reservation
            </h2>
            <p className="m-0 mt-3 font-sans text-xs text-black/80 sm:text-sm">
              Get in touch with restaurant
            </p>
          </div>

          <form
            className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3 sm:gap-5 md:mt-14"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Table booked!");
            }}
          >
            <input type="date" aria-label="Date" defaultValue="2027-01-14" className={fieldClass} />
            <select aria-label="Time" defaultValue="6:00 pm" className={fieldClass}>
              {timeOptions.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <select aria-label="Number of people" defaultValue="2 Person" className={fieldClass}>
              {personOptions.map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>

            <div className="mt-4 text-center sm:col-span-3">
              <button
                type="submit"
                className="h-12 w-full cursor-pointer border-0 bg-[#223403] font-sans text-sm text-white transition-colors hover:bg-[#33500a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#223403] sm:w-48"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
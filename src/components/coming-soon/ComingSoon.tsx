import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
/* 👇 Change this one line later to use a different background picture.
   Put the image in the `public/` folder, e.g. public/bg.jpg  */
const BG_IMAGE = "/assets/c.png";

/* 👇 Launch date for the countdown */
const LAUNCH_DATE = new Date("2027-01-01T00:00:00");

type TimeLeft = {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: Date): TimeLeft {
  const now = new Date();
  if (target.getTime() <= now.getTime()) {
    return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  let months =
    (target.getFullYear() - now.getFullYear()) * 12 +
    (target.getMonth() - now.getMonth());

  let anchor = new Date(now);
  anchor.setMonth(now.getMonth() + months);
  if (anchor > target) {
    months -= 1;
    anchor = new Date(now);
    anchor.setMonth(now.getMonth() + months);
  }

  const rest = target.getTime() - anchor.getTime();
  const days = Math.floor(rest / 86_400_000);
  const hours = Math.floor((rest % 86_400_000) / 3_600_000);
  const minutes = Math.floor((rest % 3_600_000) / 60_000);
  const seconds = Math.floor((rest % 60_000) / 1000);

  return { months, days, hours, minutes, seconds };
}

const pad = (n: number) => String(n).padStart(2, "0");

function useCountdown(target: Date) {
  const [time, setTime] = useState<TimeLeft>(() => getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return time;
}

type ComingSoonProps = {
  onMenuClick?: () => void;
  onReservationClick?: () => void;
};

export default function ComingSoon({ onMenuClick, onReservationClick }: ComingSoonProps) {
  const t = useCountdown(LAUNCH_DATE);

  const units: { value: number; label: string }[] = [
    { value: t.months, label: "Month" },
    { value: t.days, label: "Days" },
    { value: t.hours, label: "Hours" },
    { value: t.minutes, label: "Minutes" },
    { value: t.seconds, label: "Second" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />

      {/* ---------- Header ---------- */}
      <header className="relative z-10 flex items-center justify-between px-[6.5vw] pt-[3.5vw] max-sm:px-5 max-sm:pt-5">
        <div className="flex items-center gap-[2.6vw]">
          {/* Logo with offset box */}
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

      {/* ---------- Center content ---------- */}
      <section className="absolute left-1/2 top-[30%] z-10 w-[56%] -translate-x-1/2 text-center max-sm:w-[90%]">
        <h1 className="m-0 border-b-2 border-dotted border-white/70 pb-[0.45em] font-rufina text-[clamp(28px,5vw,84px)] font-semibold uppercase leading-none tracking-[0.2em] pl-[0.2em]">
          Coming Soon
        </h1>

        <div className="mt-[1.6vw] flex items-start justify-around max-sm:mt-6">
          {units.map((u) => (
            <div key={u.label} className="min-w-[10%]">
              <div className="font-rufina text-[clamp(26px,3.9vw,66px)] font-semibold leading-none tabular-nums">
                {pad(u.value)}
              </div>
              <div className="mt-[0.5em] font-rufina text-[clamp(9px,1.05vw,16px)] text-white/90">
                {u.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- View Menu button ---------- */}
      <div className="absolute left-1/2 top-[71%] z-10 -translate-x-1/2">
        <a
          href="#menu"
          className="inline-block border border-white/90 px-[2.6vw] py-[0.95vw] font-rufina text-[clamp(12px,1.35vw,20px)] font-semibold text-white no-underline transition-colors hover:bg-white hover:text-[#2f3d12] max-sm:px-6 max-sm:py-3"
        >
          View Menu
        </a>
      </div>
    </main>
  );
}
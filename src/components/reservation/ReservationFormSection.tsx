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

const fieldBase =
  "absolute h-[6.5%] min-h-[24px] border border-black/70 bg-transparent px-[2%] font-sans text-[length:max(7px,1.4cqw)] text-black outline-none placeholder:text-black focus-visible:ring-1 focus-visible:ring-black";

export default function ReservationFormSection() {
  return (
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
            {["12:00 pm", "1:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm"].map(
              (time) => (
                <option key={time}>{time}</option>
              ),
            )}
          </select>

          <select
            aria-label="Number of people"
            defaultValue="2 Person"
            className={`${fieldBase} left-[7%] top-[78.1%] w-[83%] max-[768px]:static max-[768px]:h-11 max-[768px]:min-h-0 max-[768px]:w-full`}
          >
            {["1 Person", "2 Person", "3 Person", "4 Person", "5+ Person"].map(
              (people) => (
                <option key={people}>{people}</option>
              ),
            )}
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
  );
}

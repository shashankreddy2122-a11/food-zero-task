/* Put your pictures in public/images/ and change the names here. */
const IMAGES = {
  mains: "/assets/s2.png",
  drinks: "/assets/s3.png",
};

const DESC = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const mains = [
  { price: "$20", title: "Deep Sea Snow White Cod Fillet" },
  { price: "$22", title: "Steak With Rosemary Butter" },
  { price: "$20", title: "Steaks with Grilled Kimchi" },
];

const drinks = [
  { price: "$158", title: "Wine Pairing" },
  { price: "$168", title: "Natural Wine Pairing" },
  { price: "$90", title: "Whisky Flyer" },
];

const fieldClass =
  "h-full w-full border border-black/70 bg-transparent px-[2%] font-sans text-[length:max(7px,1.2cqw)] text-black outline-none focus-visible:ring-1 focus-visible:ring-black max-sm:h-11 max-sm:min-h-0";

type Item = { price: string; title: string };

function ItemList({
  items,
  className,
}: {
  items: Item[];
  className: string;
}) {
  return (
    <div className={`absolute ${className}`}>
      {items.map((item) => (
        <div key={item.title} className="mb-[2.5cqw] last:mb-0">
          <div className="border-b border-dotted border-black pb-[0.4cqw] text-right text-[length:max(8px,1.8cqw)] leading-none">
            {item.price}
          </div>

          <h3 className="m-0 mt-[1.1cqw] text-[length:max(10px,2.7cqw)] font-normal leading-[1.25]">
            {item.title}
          </h3>

          <p className="m-0 mt-[0.7cqw] font-sans text-[length:max(6px,1cqw)] leading-[1.4] text-black/80">
            {DESC}
          </p>
        </div>
      ))}
    </div>
  );
}

/* Hand-drawn style peach branch behind "Pastries & Drinks" */
function PeachSketch({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={`pointer-events-none absolute fill-none stroke-black/70 ${className}`}
      strokeWidth="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M50 30C30 26 14 44 20 66 26 86 44 92 52 80 60 92 80 86 84 66 90 44 72 26 50 30z" />
      <path d="M52 32C50 60 52 72 52 80" />
      <path d="M50 30C48 20 54 10 66 6" />
      <path d="M58 14C70 6 84 10 90 20 78 24 66 22 58 14z" />
      <path d="M50 22C38 12 24 14 18 22 30 28 42 28 50 22z" />
    </svg>
  );
}

export default function MenuMore() {
  return (
    <div className="font-rufina text-black">
      {/* ================= Mains ================= */}
      <section className="bg-white">
        <div className="@container relative mx-auto aspect-[308/250] w-full max-w-[1200px] overflow-hidden max-sm:aspect-auto max-sm:flex max-sm:flex-col max-sm:px-5 max-sm:py-9">
          <h2 className="absolute inset-x-0 top-[7%] m-0 text-center text-[length:max(20px,5.2cqw)] font-normal leading-none max-sm:static max-sm:text-3xl">
            Mains
          </h2>

          <p className="absolute inset-x-0 top-[16%] m-0 text-center font-sans text-[length:max(7px,1.1cqw)] leading-none text-black/80 max-sm:static max-sm:mt-3 max-sm:text-xs max-sm:leading-relaxed">
            This is a section of your menu. Give your section a brief description
          </p>

          <ItemList
            items={mains}
            className="left-[9.7%] top-[27%] w-[38%] max-sm:static max-sm:order-2 max-sm:mt-7 max-sm:w-full"
          />

          <div
            role="img"
            aria-label="Steak with rosemary on a plate"
            className="absolute left-[53%] top-[30%] h-[56%] w-[39%] bg-[#d9d9d2] bg-cover bg-center max-sm:relative max-sm:order-1 max-sm:left-auto max-sm:top-auto max-sm:mt-7 max-sm:aspect-[4/3] max-sm:h-auto max-sm:w-full"
            style={{ backgroundImage: `url(${IMAGES.mains})` }}
          />
        </div>
      </section>

      {/* ================= Pastries & Drinks ================= */}
      <section className="bg-white">
        <div className="@container relative mx-auto aspect-[308/235] w-full max-w-[1200px] overflow-hidden max-sm:aspect-auto max-sm:flex max-sm:flex-col max-sm:px-5 max-sm:py-9">
          <PeachSketch className="left-[40%] top-[2%] w-[20%] max-sm:hidden" />

          <h2 className="absolute inset-x-0 top-[12%] m-0 text-center text-[length:max(18px,5cqw)] font-normal leading-none max-sm:static max-sm:text-2xl">
            Pastries &amp; Drinks
          </h2>

          <p className="absolute inset-x-0 top-[23%] m-0 text-center font-sans text-[length:max(7px,1.1cqw)] leading-none text-black/80 max-sm:static max-sm:mt-3 max-sm:text-xs max-sm:leading-relaxed">
            This is a section of your menu. Give your section a brief description
          </p>

          <div
            role="img"
            aria-label="Cocktails with citrus and rosemary"
            className="absolute left-[8%] top-[33%] h-[60%] w-[39%] bg-[#e6e1da] bg-cover bg-center max-sm:relative max-sm:order-1 max-sm:left-auto max-sm:top-auto max-sm:mt-7 max-sm:aspect-[4/3] max-sm:h-auto max-sm:w-full"
            style={{ backgroundImage: `url(${IMAGES.drinks})` }}
          />

          <ItemList
            items={drinks}
            className="left-[53.5%] right-[6%] top-[34%] max-sm:static max-sm:order-2 max-sm:mt-7 max-sm:w-full"
          />
        </div>
      </section>

      {/* ================= Make a Reservation ================= */}
      <section className="bg-[#e8eee0]">
        <div className="@container relative mx-auto aspect-[308/165] w-full max-w-[1200px] max-sm:aspect-auto max-sm:px-5 max-sm:py-9">
          <h2 className="absolute inset-x-0 top-[22%] m-0 text-center text-[length:max(18px,5cqw)] font-normal leading-none max-sm:static max-sm:text-2xl">
            Make a Reservation
          </h2>

          <p className="absolute inset-x-0 top-[39%] m-0 text-center font-sans text-[length:max(7px,1.1cqw)] leading-none text-black/80 max-sm:static max-sm:mt-3 max-sm:text-xs">
            Get in touch with restaurant
          </p>

          <form
            className="contents max-sm:mt-7 max-sm:flex max-sm:flex-col max-sm:gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Table booked!");
            }}
          >
            <div className="absolute left-[8%] right-[8%] top-[59%] grid h-[9%] min-h-[24px] grid-cols-3 gap-[2.5%] max-sm:static max-sm:grid-cols-1 max-sm:gap-3">
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
                ].map((people) => (
                  <option key={people}>{people}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="absolute left-1/2 top-[80%] h-[8.5%] min-h-[24px] w-[17%] min-w-[75px] -translate-x-1/2 cursor-pointer border-0 bg-[#223403] font-sans text-[length:max(7px,1.3cqw)] text-white transition-colors hover:bg-[#33500a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#223403] max-sm:static max-sm:mt-4 max-sm:h-11 max-sm:w-full max-sm:min-w-0 max-sm:translate-x-0 max-sm:text-sm"
            >
              Book Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

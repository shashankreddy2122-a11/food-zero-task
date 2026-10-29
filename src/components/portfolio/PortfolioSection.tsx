/* 👇 Put your pictures in public/images/ and change the names here. */
const IMAGES = {
  portfolio1: "/images/portfolio-1.jpg",
  portfolio2: "/images/portfolio-2.jpg",
  portfolio3: "/images/portfolio-3.jpg",
  portfolio4: "/images/portfolio-4.jpg",
  portfolio5: "/images/portfolio-5.jpg",
  portfolio6: "/images/portfolio-6.jpg",
};

const DESC = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const portfolioItems = [
  {
    image: IMAGES.portfolio1,
    title: "Fresh Vegetables",
    category: "Food",
  },
  {
    image: IMAGES.portfolio2,
    title: "Healthy Salad",
    category: "Food",
  },
  {
    image: IMAGES.portfolio3,
    title: "Organic Fruits",
    category: "Food",
  },
  {
    image: IMAGES.portfolio4,
    title: "Grilled Fish",
    category: "Food",
  },
  {
    image: IMAGES.portfolio5,
    title: "Pasta Dish",
    category: "Food",
  },
  {
    image: IMAGES.portfolio6,
    title: "Dessert",
    category: "Food",
  },
];

/* Picture box: shows a pale green block until the image file exists */
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

export default function PortfolioSection({ columns = 3 }: { columns?: 1 | 2 | 3 }) {
  const gridCols = columns === 1 ? "grid-cols-1" : columns === 2 ? "grid-cols-2" : "grid-cols-3";

  return (
    <div className="font-rufina text-[#1d2a07]">
      {/* ================= Portfolio Grid ================= */}
      <section className="bg-white">
        <div className="@container mx-auto w-full max-w-[1200px] px-[7.7cqw] pb-[11cqw] pt-[11.5cqw]">
          <h2 className="m-0 text-center text-[length:max(22px,6.2cqw)] font-normal leading-none">
            Portfolio
          </h2>
          <p className="m-0 mt-[3.4cqw] text-center font-sans text-[length:max(6px,1.45cqw)] text-[#1d2a07]/80">
            Explore our latest work and culinary creations
          </p>

          <div className={`mt-[8.4cqw] grid ${gridCols} gap-[3.1cqw]`}>
            {portfolioItems.map((item) => (
              <article key={item.title}>
                <div className="relative">
                  <Pic
                    src={item.image}
                    label={item.title}
                    className="aspect-[133/131] w-full"
                  />
                  <span className="absolute right-0 top-0 bg-[#4a5a00] px-[3.4cqw] py-[1cqw] font-sans text-[length:max(6px,1.7cqw)] text-white">
                    {item.category}
                  </span>
                </div>

                <h3 className="m-0 mt-[2.4cqw] text-[length:max(12px,3.45cqw)] font-normal leading-[1.28]">
                  {item.title}
                </h3>

                <div className="mt-[1.6cqw] border-t border-dashed border-[#1d2a07]/70" />

                <p className="m-0 mt-[1.8cqw] font-sans text-[length:max(6px,1.45cqw)] leading-[1.5] text-[#1d2a07]/80">
                  {DESC}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

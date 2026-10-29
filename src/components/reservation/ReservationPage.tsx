import { ArrowLeft } from "lucide-react";
import Footer from "../footer/Footer";
import ReservationFormSection from "./ReservationFormSection";

type ReservationPageProps = {
  onBack?: () => void;
};

export default function ReservationPage({ onBack }: ReservationPageProps) {
  return (
    <main className="min-h-screen bg-white font-rufina text-[#1d2a07]">
      <header className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-[6%] lg:py-8">
        <div className="flex items-center gap-3 sm:gap-5">
          <button
            type="button"
            aria-label="Back to navigation"
            onClick={onBack}
            className="flex size-8 shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-[#1d2a07] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <ArrowLeft aria-hidden="true" className="size-6" />
          </button>
          <a
            href="#home"
            className="relative inline-block px-1 text-2xl font-normal leading-none text-[#1d2a07] no-underline sm:text-3xl lg:text-4xl"
          >
            <span
              aria-hidden="true"
              className="absolute -top-[12%] left-[18%] right-[19%] h-[135%] border border-[#1d2a07]/70"
            />
            <span className="relative">FoodZero</span>
          </a>
        </div>
        <a
          href="tel:+8685234600"
          className="font-sans text-xs text-[#1d2a07] no-underline sm:text-sm"
        >
          +86 852 346 000
        </a>
      </header>

      <ReservationFormSection />
      <Footer />
    </main>
  );
}

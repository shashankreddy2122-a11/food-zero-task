import { useState } from "react";
import Navigation from "./components/navigation/Navigation";
import ComingSoon from "./components/coming-soon/ComingSoon";
import Home from "./components/home/Home";
import MenuPage from "./components/menu/MenuPage";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import GridPage from "./components/portfolio/GridPage";
import SinglePortfolio from "./components/portfolio/SinglePortfolio";
import PortfolioSection from "./components/portfolio/PortfolioSection";
import Footer from "./components/footer/Footer";
import BlogsPage from "./components/blog/BlogsPage"; 
import BlogSingleColumnPage from "./components/blog/BlogSingleColumnPage";
import BlogSidebarPage from "./components/blog/BlogSidebarPage";
import ReservationPage from "./components/reservation/ReservationPage";

type Page = "navigation" | "home" | "menu" | "contact" | "reservation" | "about" | "grid" | "single-portfolio" | "blog-listing" | "blog-single-column" | "blog-sidebar" | "portfolio-1-column" | "portfolio-2-columns" | "portfolio-3-columns" | "coming-soon";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("navigation");

  const show = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const toNavigation = () => show("navigation");
  const handleComingSoon = () => show("coming-soon");
  const toReservation = () => show("reservation");

  /* Map navigation links to pages. Add more here as you build them. */
  const handleNavigate = (href: string) => {
    const destinations: Record<string, Page> = {
      "#home": "home",
      "#menu": "menu",
      "#contact": "contact",
      "#about": "about",
      "#blog-1-column": "blog-single-column",
      "#blog-2-columns": "blog-listing",
      "#blog-sidebar": "blog-sidebar",
      "#portfolio-3-columns": "grid",
      "#portfolio-1-column": "single-portfolio",
      "#portfolio-2-columns": "portfolio-2-columns",
    }
    
    show(destinations[href] ?? "coming-soon");
  };

  if (currentPage === "home") {
    return <Home onMenuClick={toNavigation} onReservationClick={toReservation} />;
  }

  if (currentPage === "menu") {
    return <MenuPage onBack={toNavigation} onReservationClick={toReservation} />;
  }

  if (currentPage === "contact") {
    return <Contact onMenuClick={toNavigation} onReservationClick={toReservation} />;
  }

  if (currentPage === "reservation") {
    return <ReservationPage onBack={toNavigation} />;
  }

  if (currentPage === "about") {
    return <About onMenuClick={toNavigation} onReservationClick={toReservation} />;
  }

  if (currentPage === "grid") {
    return <GridPage onMenuClick={toNavigation} onReservationClick={toReservation} />;
  }

  if (currentPage === "single-portfolio") {
    return <SinglePortfolio onMenuClick={toNavigation} onGridClick={() => show("grid")} onReservationClick={toReservation} />;
  }

  if (currentPage === "blog-listing") {
    return <BlogsPage onBack={toNavigation} onReservationClick={toReservation} />;
  }

  if (currentPage === "blog-single-column") {
    return <BlogSingleColumnPage onBack={toNavigation} onReservationClick={toReservation} />;
  }

  if (currentPage === "blog-sidebar") {
    return <BlogSidebarPage onMenuClick={toNavigation} onReservationClick={toReservation} />;
  }

  if (currentPage === "portfolio-1-column") {
    return (
      <main className="min-h-screen bg-white font-rufina text-[#1d2a07]">
        <PortfolioSection columns={1} />
        <Footer />
      </main>
    );
  }

  if (currentPage === "portfolio-2-columns") {
    return (
      <main className="min-h-screen bg-white font-rufina text-[#1d2a07]">
        <PortfolioSection columns={2} />
        <Footer />
      </main>
    );
  }

  if (currentPage === "portfolio-3-columns") {
    return (
      <main className="min-h-screen bg-white font-rufina text-[#1d2a07]">
        <PortfolioSection columns={3} />
        <Footer />
      </main>
    );
  }

  if (currentPage === "coming-soon") {
    return <ComingSoon onMenuClick={toNavigation} onReservationClick={toReservation} />;
  }

  return <Navigation onNavigate={handleNavigate} onComingSoonClick={handleComingSoon} />;
}
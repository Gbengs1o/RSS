import TopBar from "@/components/TopBar";
import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import PromotionalBanners from "@/components/PromotionalBanners";
import HotDeals from "@/components/HotDeals";
import HotDeals2 from "@/components/HotDeals2";
import ShopWithCategories from "@/components/ShopWithCategories";
import BestDeal from "@/components/BestDeal";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <TopBar />
      <MainHeader />
      <NavBar />

      <main>
        <HeroSection />
        <ShopWithCategories />
        <Features />
        <PromotionalBanners />
        <HotDeals />
        <HotDeals2 />
        <BestDeal />
        <VideoSection />
      </main>

      <Footer />
    </div>
  );
}

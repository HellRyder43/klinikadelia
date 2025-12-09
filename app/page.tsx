import Navbar from "@/components/Navbar";
import MobileBottomBar from "@/components/MobileBottomBar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DoctorProfile from "@/components/DoctorProfile";
import InsuranceMarquee from "@/components/InsuranceMarquee";
import ReviewCarousel from "@/components/ReviewCarousel";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <DoctorProfile />
        <InsuranceMarquee />
        <ReviewCarousel />
        <Location />
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}

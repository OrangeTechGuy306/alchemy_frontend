import About from "@/components/custom-ui/homepage/dedicated";
import HeroSection from "@/components/custom-ui/homepage/hero-section";
import Services from "@/components/custom-ui/homepage/service";
import CoreValues from "@/components/custom-ui/homepage/values";
import AppointmentPage from "./appointment/page";
import ServicesSection from "@/components/custom-ui/homepage/moreservice";
import Footer from "@/components/custom-ui/homepage/footer";

export default function Home() {
  return (
    <div className="">
         <HeroSection />
         <About/>
         <Services/>
         <CoreValues/>
         <AppointmentPage/>
         <ServicesSection/>
         <Footer/>
    </div>
  );
}

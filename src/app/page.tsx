import FooterComponent from "@/components/Footer";
import HeroDemo from "@/components/Hero";
import Pricing from "@/components/ui/pricing-base";
import LineTime from "@/components/LineTime";
import ContactSection from "@/components/Contact";
import PortfolioSection from "@/components/Portfolio";
import ProcessSection from "@/components/Process";
import ServicesSection from "@/components/Services";
import PremiumTestimonials from "@/components/ui/animated-testimonials";
import HeaderNav from "@/components/Header-Nav";

export default function Home() {
    return (
        <>
            <HeaderNav/>
            <HeroDemo/>
            <Pricing/>
            <LineTime/>
            <ServicesSection/>
            <ProcessSection/>
            <PortfolioSection/>
            <ContactSection/>
            <PremiumTestimonials/>
            <FooterComponent />
        </>
    );
}
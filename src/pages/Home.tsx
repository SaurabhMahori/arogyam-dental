import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutDoctor from "@/components/AboutDoctor";
import Services from "@/components/Services";
import JourneyTimeline from "@/components/JourneyTimeline";
import FamilyCare from "@/components/FamilyCare";
import ComfortExperience from "@/components/ComfortExperience";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactBook from "@/components/ContactBook";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary/20">
      <Navigation />
      <Hero />
      <AboutDoctor />
      <Services />
      <JourneyTimeline />
      <FamilyCare />
      <ComfortExperience />
      <Testimonials />
      <FAQ />
      <ContactBook />
      <Footer />
    </main>
  );
}

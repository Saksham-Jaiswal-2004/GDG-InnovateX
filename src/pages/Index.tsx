import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TrackSection from "@/components/TrackSection";
import DetailsSection from "@/components/DetailsSection";
import SubmissionSection from "@/components/SubmissionSection";
import TimelineSection from "@/components/TimelineSection";
import EventsSection from "@/components/EventsSection";
import JudgingSection from "@/components/JudgingSection";
import RulesSection from "@/components/RulesSection";
import PrizesSection from "@/components/PrizesSection";
import MentorsSection from "@/components/MentorsSection";
import SponsorsSection from "@/components/SponsorsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TrackSection />
        <DetailsSection />
        <SubmissionSection />
        <TimelineSection />
        <EventsSection />
        <JudgingSection />
        <RulesSection />
        <PrizesSection />
        <MentorsSection />
        <SponsorsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;

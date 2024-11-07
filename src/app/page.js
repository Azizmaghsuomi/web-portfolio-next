import AboutSection from "./_components/AboutSection";
import AchievementsSection from "./_components/AchievementsSection";
import EmailSelection from "./_components/EmailSelection";
import Footer from "./_components/Footer";
import Herosection from "./_components/Herosection";
import Navbar from "./_components/Navbar";
import ProjectsSection from "./_components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <container className="container mx-auto px-12 py-8 mt-24">
        <Herosection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSelection />
      </container>
      <Footer />
    </main>
  );
}

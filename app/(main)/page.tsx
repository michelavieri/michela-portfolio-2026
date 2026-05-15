import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogosSection } from "@/components/sections/LogosSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { WorkSection } from "@/components/sections/WorkSection";

export default function Home() {
  return (
    <div className="px-6 lg:px-12">
      <section id="intro"><HeroSection /></section>
      <AboutSection />
      <LogosSection />
      <section id="portfolio"><WorkSection /></section>
      <section id="experiences"><ExperiencesSection /></section>
      <section id="skills"><SkillsSection /></section>
      <section id="resume"><ResumeSection /></section>
      <section id="contact"><ContactSection /></section>
    </div>
  );
}

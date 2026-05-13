import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { WorkSection } from "@/components/sections/WorkSection";

export default function Home() {
  return (
    <div className="px-6 lg:px-12">
      <section id="intro"><HeroSection /></section>
      <section id="work"><WorkSection /></section>
      <section id="experiences"><ExperiencesSection /></section>
      <section id="skills"><SkillsSection /></section>
      <section id="resume"></section>
      <section id="contact"></section>
    </div>
  );
}

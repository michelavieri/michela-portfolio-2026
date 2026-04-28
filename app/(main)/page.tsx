import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorkSection } from "@/components/sections/WorkSection";

export default function Home() {
  return (
    <div className="px-6 lg:px-12">
      <section id="intro"><HeroSection /></section>
      <section id="work"><WorkSection /></section>
      <section id="experiences"></section>
      <section id="skills"></section>
      <section id="resume"></section>
      <section id="contact"></section>
    </div>
  );
}

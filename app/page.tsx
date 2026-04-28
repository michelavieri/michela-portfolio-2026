import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <div className="px-6 lg:px-12">
      <section id="intro"><HeroSection /></section>
      <section id="work"></section>
      <section id="experiences"></section>
      <section id="skills"></section>
      <section id="resume"></section>
      <section id="contact"></section>
    </div>
  );
}

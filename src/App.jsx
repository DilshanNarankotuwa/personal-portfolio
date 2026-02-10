import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import StatsBar from "./components/StatsBar.jsx";
import SkillConstellation from "./components/SkillConstellation.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Noise from "./components/Noise.jsx";
import Grid from "./components/Grid.jsx";
import { useLenis } from "./lib/useLenis.js";
import { useTheme } from "./lib/useTheme.js";

export default function App() {
  useLenis();
  useTheme();

  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      <Noise />
      <Grid />

      <Header />

      <main className="relative">
        <Hero />
        <StatsBar />
        <SkillConstellation />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import ProjectSection from "./components/ProjectSection";
import ArticleSection from "./components/ArticleSection";
const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Header />
      <HeroSection setIsLoading={setIsLoading} />
      <AboutSection id="about" />
      <ExperienceSection id="experience" />
      <ProjectSection id="projects" />
      <ArticleSection id="articles" />
      <ContactSection id="contact" />
    </>
  );
};

export default Home;

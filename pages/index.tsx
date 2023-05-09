import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import ProjectSection from "./components/ProjectSection";
import ArticleSection from "./components/ArticleSection";
import styled from "@emotion/styled";

const MainContent = styled.div`
  background: radial-gradient(circle at top left, #1e3f5a, #08192d);

  .text-glow {
    color: #ffffff;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 15px #3cc5ff,
      0 0 20px #3cc5ff, 0 0 30px #3cc5ff, 0 0 40px #3cc5ff;
  }
`;

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Header />
      <MainContent>
        <HeroSection />
        <AboutSection id="about" />
        <ExperienceSection id="education&experience" />
        <ProjectSection id="projects" />
        <ArticleSection id="articles" />
        <ContactSection id="contact" />
      </MainContent>
    </>
  );
};

export default Home;

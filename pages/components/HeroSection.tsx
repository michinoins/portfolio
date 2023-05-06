import React from "react";
import { Particles } from "react-tsparticles";
import styled from "@emotion/styled";

const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  color: white;
`;

const Name = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Tagline = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const particlesOptions = {};

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <Particles width="100%" height="100%" options={particlesOptions} />
      <Content>
        <Name>Mikiya Ichino</Name>
        <Tagline>FullStack Developer</Tagline>
      </Content>
    </HeroContainer>
  );
};

export default HeroSection;

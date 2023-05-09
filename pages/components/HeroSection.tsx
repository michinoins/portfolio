import React from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding-left: 5rem;
  padding-top: 20rem;
`;

const Name = styled(Typography)`
  font-family: "Roboto", sans-serif;
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #e0e0e0;
  text-align: left;
  text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
`;

const Tagline = styled(Typography)`
  font-family: "Roboto", sans-serif;
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #b3ffff;
  text-align: left;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`;

const Introduction = styled(Typography)`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #b0bec5;
  text-align: left;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
`;

const Greet = styled(Typography)`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #e0e0e0;
  text-align: left;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
`;

const HeroSection: React.FC = () => {
  return (
    <Container>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css?family=Orbitron&display=swap");
        `}
      />
      <Greet>Hi, my name is </Greet>
      <Name variant="h1">Mikiya Ichino.</Name>
      <Tagline variant="h1">Empowering the digital world</Tagline>
      <Introduction variant="h4">
        I love creating beautiful, responsive, and user-friendly websites. With
        a passion for both design and functionality,
        <br />
        I bring ideas to life. My expertise spans multiple languages and
        frameworks, ensuring versatile solutions.
        <br />
        Driven by curiosity, I&apos;m always eager to learn and explore new
        technologies. Collaborating with diverse teams,
        <br />I strive to deliver exceptional digital experiences.
      </Introduction>
    </Container>
  );
};

export default HeroSection;

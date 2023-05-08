import React from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: flex-start; // 変更
  justify-content: flex-start; // 変更
  flex-direction: column;
  padding-left: 5rem; // 左のスペースを調整
  padding-top: 25rem; // 上のスペースを調整
`;

const Name = styled(Typography)`
  font-family: "Orbitron", sans-serif;
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #ffffff;
  text-align: left;
`;

const Tagline = styled(Typography)`
  font-family: "Orbitron", sans-serif;
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #ffffff;
  text-align: left;
`;

const Introduction = styled(Typography)`
  font-family: "Orbitron", sans-serif;
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #ffffff;
  text-align: left;
`;
const Greet = styled(Typography)`
  font-family: "Orbitron", sans-serif;
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #ffffff;
  text-align: left;
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
      <Tagline variant="h1">Crafting digital magic</Tagline>
      <Introduction variant="h4">
        I love creating beautiful, responsive, and user-friendly websites. With
        a passion for both design and functionality,
        <br />
        I bring ideas to life. My expertise spans multiple languages and
        frameworks, ensuring versatile solutions.
        <br />
        Driven by curiosity, I'm always eager to learn and explore new
        technologies. Collaborating with diverse teams,
        <br />I strive to deliver exceptional digital experiences.
      </Introduction>
    </Container>
  );
};

export default HeroSection;

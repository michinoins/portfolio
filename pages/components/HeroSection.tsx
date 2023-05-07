import React from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Name = styled(Typography)`
  font-family: "Orbitron", sans-serif;
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffffff;
  text-shadow: 0 0 10px #00f3ff, 0 0 20px #00f3ff, 0 0 30px #00f3ff;
`;

const Tagline = styled(Typography)`
  font-family: "Orbitron", sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
  text-shadow: 0 0 10px #00f3ff, 0 0 20px #00f3ff, 0 0 30px #00f3ff;
`;

const Introduction = styled(Typography)`
  font-family: "Orbitron", sans-serif;
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #ffffff;
  text-shadow: 0 0 10px #00f3ff, 0 0 20px #00f3ff, 0 0 30px #00f3ff;
`;

const HiThere = styled(Typography)`
  font-family: "Orbitron", sans-serif;
  font-size: 1.5rem;
  position: absolute;
  left: 1rem;
  top: 1rem;
  color: #ffffff;
  text-shadow: 0 0 10px #00f3ff, 0 0 20px #00f3ff, 0 0 30px #00f3ff;
`;

const HeroSection: React.FC = () => {
  return (
    <Container>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css?family=Orbitron&display=swap");
        `}
      />
      <HiThere variant="h4">Hi, There</HiThere>
      <Name variant="h1">Mikiya Ichino</Name>
      <Tagline variant="h2">FullStack Developer</Tagline>
      <Introduction variant="h4">
        I love creating beautiful, responsive, and user-friendly websites.
      </Introduction>
    </Container>
  );
};

export default HeroSection;

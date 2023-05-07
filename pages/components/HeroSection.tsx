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
  background-color: #1e3f5a;
`;

const Name = styled(Typography)`
  font-family: "Pacifico", cursive;
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const Tagline = styled(Typography)`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const Introduction = styled(Typography)`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const HiThere = styled(Typography)`
  font-size: 1.5rem;
  position: absolute;
  left: 1rem;
  top: 1rem;
  color: #ffffff;
`;

const Bubble = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  animation-name: float;
  animation-duration: var(--duration);
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  transform: translate(0, 0);
  --duration: ${() => Math.random() * 5 + 2}s;
`;
const HeroSection: React.FC = () => {
  const bubbles = [];

  for (let i = 0; i < 150; i++) {
    const size = Math.random() * 2 + 1;
    const angle = Math.random() * 360;
    const distance = Math.random() * 100;
    const style = {
      width: `${size}rem`,
      height: `${size}rem`,
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      animationDuration: `${Math.random() * 5 + 2}s`,
      "--angle": `${angle}deg`,
      "--distance": `${distance}px`,
    };
    bubbles.push(<Bubble key={i} style={style} />);
  }

  return (
    <Container>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css?family=Pacifico&display=swap");
          @keyframes float {
            0%,
            100% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(
                calc(var(--distance) * cos(var(--angle))),
                calc(var(--distance) * sin(var(--angle)))
              );
            }
          }
        `}
      />
      {bubbles}
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

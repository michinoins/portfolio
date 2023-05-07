import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Name = styled(Typography)`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Tagline = styled(Typography)`
  font-size: 1.5rem;
`;

interface HeroSectionProps {
  setIsLoading: (value: boolean) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setIsLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        setIsLoading(false);
      }
    }, 30);

    return () => {
      clearTimeout(timer);
    };
  }, [progress, setIsLoading]);

  return (
    <Container>
      <Name variant="h1">Mikiya Ichino</Name>
      <Tagline variant="h2">FullStack Developer</Tagline>
    </Container>
  );
};

export default HeroSection;

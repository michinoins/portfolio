import React from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const Section = styled.section`
  padding: 3rem 0;
`;

const SectionTitle = styled(Typography)`
  margin-bottom: 2rem;
  text-align: center;
`;

const Paragraph = styled(Typography)`
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
`;

const AboutSection: React.FC = () => {
  return (
    <Section>
      <SectionTitle variant="h4">About Me</SectionTitle>
      <Paragraph>
        Hello! My name is [Your Name], and I'm a front-end developer with a
        passion for creating beautiful, responsive, and user-friendly websites.
        I have experience working with HTML, CSS, JavaScript, React, and
        Next.js. I'm always eager to learn new technologies and improve my
        skills. In my spare time, I enjoy reading about web development,
        exploring new libraries and frameworks, and contributing to open-source
        projects.
      </Paragraph>
    </Section>
  );
};

export default AboutSection;

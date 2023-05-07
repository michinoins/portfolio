import React from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiKotlin,
  SiSpring,
  SiGo,
  SiAmazonaws,
  SiGooglecloud,
  SiGithubactions,
} from "react-icons/si";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

const Content = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-right: 3rem;
`;

const SectionTitle = styled(Typography)`
  margin-bottom: 2rem;
`;

const Paragraph = styled(Typography)`
  text-align: justify;
  margin-bottom: 2rem;
`;

const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StackItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

interface AboutSectionProps {
  id: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id }) => {
  return (
    <Section id={id}>
      <Content>
        <SectionTitle variant="h4">About Me</SectionTitle>
        <Paragraph>
          Hello! My name is Mikiya, and I'm a FullStack developer with a passion
          for creating beautiful, responsive, and user-friendly websites. I have
          experience working with HTML, CSS, JavaScript, React, and Next.js. I'm
          always eager to learn new technologies and improve my skills. In my
          spare time, I enjoy reading about web development, exploring new
          libraries and frameworks, and contributing to open-source projects.
        </Paragraph>
        <SectionTitle variant="h5">Technical Stack</SectionTitle>
        <StackContainer>
          <StackItem>
            <SiJavascript size={24} />
            <Typography>JavaScript</Typography>
          </StackItem>
          <StackItem>
            <SiReact size={24} />
            <Typography>React.js</Typography>
          </StackItem>
          <StackItem>
            <SiTypescript size={24} />
            <Typography>TypeScript</Typography>
          </StackItem>
          <StackItem>
            <SiNodedotjs size={24} />
            <Typography>Node.js</Typography>
          </StackItem>
          <StackItem>
            <SiKotlin size={24} />
            <Typography>Kotlin</Typography>
          </StackItem>
          <StackItem>
            <SiSpring size={24} />
            <Typography>SpringBoot</Typography>
          </StackItem>
          <StackItem>
            <SiGo size={24} />
            <Typography>Go</Typography>
          </StackItem>
          <StackItem>
            <SiAmazonaws size={24} />
            <Typography>AWS</Typography>
          </StackItem>
          <StackItem>
            <SiGooglecloud size={24} />
            <Typography>GCP</Typography>
          </StackItem>
          <StackItem>
            <SiGithubactions size={24} />
            <Typography>GitHub Actions</Typography>
          </StackItem>
        </StackContainer>
      </Content>
      <ProfileImage src="/profile.jpeg" alt="Your profile picture" />
    </Section>
  );
};

export default AboutSection;

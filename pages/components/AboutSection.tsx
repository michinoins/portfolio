import React, { useEffect, useState } from "react";
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
import { useInView } from "react-intersection-observer";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 2s ease-in-out;
  margin: 50px 0;
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
  color: #ffffff;
  font-family: "Roboto", sans-serif;
`;

const Paragraph = styled(Typography)`
  text-align: justify;
  margin-bottom: 2rem;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
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

const TechTypography = styled(Typography)`
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  text-shadow: 0 0 2px #ffffff, 0 0 4px #3cc5ff;
`;

const ColoredIcon = styled.svg`
  color: #3cc5ff;
`;

interface AboutSectionProps {
  id: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <Section id={id} ref={ref} isVisible={isVisible}>
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
            <ColoredIcon as={SiJavascript} size={24} />
            <TechTypography>JavaScript</TechTypography>
          </StackItem>
          <StackItem>
            <ColoredIcon as={SiReact} size={24} />
            <TechTypography>React</TechTypography>
          </StackItem>
          <StackItem>
            <ColoredIcon as={SiTypescript} size={24} />
            <TechTypography>TypeScript</TechTypography>
          </StackItem>
          <StackItem>
            <ColoredIcon as={SiNodedotjs} size={24} />
            <TechTypography>Node.js</TechTypography>
          </StackItem>
          <StackItem>
            <ColoredIcon as={SiKotlin} size={24} />
            <TechTypography>Kotlin</TechTypography>
          </StackItem>
          <StackItem>
            <ColoredIcon as={SiSpring} size={24} />
            <TechTypography>Spring</TechTypography>
          </StackItem>
          <StackItem>
            <ColoredIcon as={SiGo} size={24} />
            <TechTypography>Go</TechTypography>
          </StackItem>
          <StackItem>
            <ColoredIcon as={SiAmazonaws} size={24} />
            <TechTypography>AWS</TechTypography>
          </StackItem>
          <StackItem>
            <ColoredIcon as={SiGooglecloud} size={24} />
            <TechTypography>GCP</TechTypography>
          </StackItem>
          <StackItem>
            <ColoredIcon as={SiGithubactions} size={24} />
            <TechTypography>GitHub Actions</TechTypography>
          </StackItem>
        </StackContainer>
      </Content>
      <ProfileImage src="/profile.jpeg" alt="Your profile picture" />
    </Section>
  );
};

export default AboutSection;

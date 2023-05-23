import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import {
  SiHtml5,
  SiCss3,
  SiJunit5,
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
import { IconType } from "react-icons";

const Section = styled.section<{ isVisible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1.7s ease-in-out;
  margin: 50px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const Content = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-right: 3rem;

  @media (max-width: 768px) {
    margin-right: 0;
    align-items: center;
  }
`;

const SectionTitle = styled(Typography)`
  margin-bottom: 2rem;
  color: #b3ffff;
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
const ColoredIcon = styled.svg<{ as: IconType; size: number }>`
  color: #3cc5ff;
  ${({ size }) => size && `font-size: ${size}px;`}
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
        <SectionTitle variant="h5">About Me</SectionTitle>
        <Paragraph>
          Hello! My name is Mikiya, and I&apos;m a FullStack developer with a
          passion for creating beautiful, responsive, and user-friendly
          websites. I have experience working with HTML, CSS, JavaScript, React,
          and Next.js. I&apos;m always eager to learn new technologies and
          improve my skills. In my spare time, I enjoy reading about web
          development, exploring new libraries and frameworks, and contributing
          to open-source projects.
        </Paragraph>
        <SectionTitle variant="h5">Technical Stack</SectionTitle>
        <StackContainer>
          <StackItem>
            <ColoredIcon as={SiHtml5} size={24} />
            <TechTypography>HTML</TechTypography>
          </StackItem>
          <StackItem>
            <ColoredIcon as={SiCss3} size={24} />
            <TechTypography>CSS</TechTypography>
          </StackItem>
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
            <ColoredIcon as={SiJunit5} size={24} />
            <TechTypography>Junit5</TechTypography>
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

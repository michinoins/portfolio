import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Link as MuiLink,
} from "@mui/material";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const Link = styled(MuiLink)`
  text-decoration: none;
  color: inherit;
  display: flex;
  width: 100%;
`;

const Section = styled.section<{ isVisible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1.7s ease-in-out;
  margin: 150px 0;
`;

const Content = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const SectionTitle = styled(Typography)`
  margin-bottom: 2rem;
  color: #b3ffff;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
`;

const ProjectCard = styled(Card)`
  display: flex;
  flex-direction: column;
  max-width: 45%;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover::after {
    opacity: 1;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  &::after {
    content: ${({ title }) => `"${title}"`};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;

const ProjectCardMedia = styled(CardMedia)`
  height: 200px;
  width: 500px;
  object-fit: contain;
`;

const ProjectCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CompanyName = styled(Typography)`
  margin-bottom: 0.8rem;
  margin-left: 0.5rem;
  font-weight: bold;
  color: #1976d2;
`;

interface ProjectSectionProps {
  id: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ id }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const projects = [
    {
      title: "Real Estate Management System",
      description: "Role: Backend / Frontend Engineer",
      imageUrl: "/livable.png",
      companyName: "@TeamLab",
      link: "https://www.team-lab.com/livable/",
    },
    {
      title: "IoT Device Operation Mobile App",
      description: "Role: Backend Engineer",
      imageUrl: "/rinnai.png",
      companyName: "@TeamLab",
      link: "https://www.team-lab.com/rinnaiapp/",
    },
    {
      title: "Portfolio Website",
      description: "...",
      imageUrl: "/portfolio.png",
      companyName: "Personal Project",
      link: "",
    },
  ];

  return (
    <Section id={id} ref={ref} isVisible={isVisible}>
      <Content>
        <SectionTitle variant="h5">Projects</SectionTitle>
        <List>
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title}>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectCardContent>
                  <CompanyName>{project.companyName}</CompanyName>
                  <ProjectCardMedia image={project.imageUrl} />
                </ProjectCardContent>
              </Link>
            </ProjectCard>
          ))}
        </List>
      </Content>
    </Section>
  );
};

export default ProjectSection;

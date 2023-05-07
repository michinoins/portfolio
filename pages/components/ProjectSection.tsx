// src/components/ProjectSection.tsx
import React from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
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

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  animation: 1s ${fadeInAnimation};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const ListItemTitle = styled(Typography)`
  font-weight: bold;
`;

const ListItemSubtitle = styled(Typography)`
  color: #1976d2;
`;

const ListItemDescription = styled(Typography)`
  text-align: justify;
`;

interface ProjectSectionProps {
  id: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ id }) => {
  const projects = [
    {
      title: "Project 1",
      description:
        "This is a sample project that demonstrates my skills in front-end development using React, Redux, and Material UI.",
      technologies: ["React", "Redux", "Material UI"],
    },
    {
      title: "Project 2",
      description:
        "This is a sample project that demonstrates my skills in back-end development using Node.js, Express, and MongoDB.",
      technologies: ["Node.js", "Express", "MongoDB"],
    },
    {
      title: "Project 3",
      description:
        "This is a sample project that demonstrates my skills in mobile app development using React Native.",
      technologies: ["React Native"],
    },
  ];

  return (
    <Section id={id}>
      <Content>
        <SectionTitle variant="h4">Projects</SectionTitle>
        <List>
          {projects.map((project, index) => (
            <ListItem key={index}>
              <ListItemTitle variant="h5">{project.title}</ListItemTitle>
              <ListItemDescription>{project.description}</ListItemDescription>
            </ListItem>
          ))}
        </List>
      </Content>
    </Section>
  );
};

export default ProjectSection;

import React from "react";
import { Typography, Card, CardContent, CardHeader } from "@mui/material";
import styled from "@emotion/styled";

const Section = styled.section`
  padding: 3rem 0;
`;

const SectionTitle = styled(Typography)`
  margin-bottom: 2rem;
  text-align: center;
`;
interface ExperienceSectionProps {
  id: string;
}
const ExperienceSection: React.FC<ExperienceSectionProps> = ({ id }) => {
  return (
    <Section id={id}>
      <SectionTitle variant="h4">Experience</SectionTitle>
      <Card>
        <CardHeader title="Your Company" subheader="Front-end Developer" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            January 2021 - Present
          </Typography>
          <Typography variant="body1">
            - Developed and maintained responsive web applications using React,
            Next.js, and TypeScript.
            <br />
            - Collaborated with designers to implement visually appealing
            designs and user interfaces.
            <br />- Optimized website performance and user experience using best
            practices and performance analysis tools.
          </Typography>
        </CardContent>
      </Card>
    </Section>
  );
};

export default ExperienceSection;

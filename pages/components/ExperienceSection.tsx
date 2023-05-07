import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  Box,
  Grid,
} from "@mui/material";
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
  padding: 3rem 0;
`;

const SectionTitle = styled(Typography)`
  margin-bottom: 2rem;
  text-align: center;
`;

const CompanyButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  border: 1px solid #1976d2;
  border-radius: 5px;
  text-align: left;
  transition: all 0.3s ease;
  background-color: ${({ active }) => (active ? "#1976d2" : "white")};
  color: ${({ active }) => (active ? "white" : "rgba(0, 0, 0, 0.87)")};

  &:hover {
    background-color: #1976d2;
    color: white;
  }
`;

const AnimatedCardContent = styled(CardContent)`
  animation: 1s ${fadeInAnimation};
`;

interface ExperienceSectionProps {
  id: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ id }) => {
  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0);

  const companies = [
    {
      name: "Company A",
      position: "Front-end Developer",
      period: "January 2021 - Present",
      description: [
        "Developed and maintained responsive web applications using React, Next.js, and TypeScript.",
        "Collaborated with designers to implement visually appealing designs and user interfaces.",
        "Optimized website performance and user experience using best practices and performance analysis tools.",
      ],
    },
    {
      name: "Company B",
      position: "Back-end Developer",
      period: "April 2020 - December 2020",
      description: [
        "Developed and maintained server-side applications using Node.js, Express, and MongoDB.",
        "Implemented RESTful APIs for various web applications.",
        "Collaborated with front-end developers to integrate APIs with user interfaces.",
      ],
    },
  ];

  const selectedCompany = companies[selectedCompanyIndex];

  return (
    <Section id={id}>
      <SectionTitle variant="h4">Experience</SectionTitle>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={3}>
          {companies.map((company, index) => (
            <CompanyButton
              key={index}
              onClick={() => setSelectedCompanyIndex(index)}
              active={selectedCompanyIndex === index}
            >
              {company.name}
            </CompanyButton>
          ))}
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Card>
            <CardHeader
              title={selectedCompany.position}
              subheader={selectedCompany.name}
            />
            <AnimatedCardContent>
              <Typography variant="body2" color="text.secondary">
                {selectedCompany.period}
              </Typography>
              {selectedCompany.description.map((item, index) => (
                <Typography key={index} variant="body1">
                  - {item}
                </Typography>
              ))}
            </AnimatedCardContent>
          </Card>
        </Grid>
      </Grid>
    </Section>
  );
};

export default ExperienceSection;

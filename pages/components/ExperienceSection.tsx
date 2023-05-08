import React, { useState, useEffect } from "react";
import { Typography, Card, CardContent, CardHeader, Grid } from "@mui/material";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useInView } from "react-intersection-observer";

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
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 2s ease-in-out;
  margin: 50px 0; 

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
  font-family: "Roboto Mono", monospace;
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
  background-color: ${({ active }) => (active ? "#1976d2" : "transparent")};
  color: ${({ active }) => (active ? "white" : "#ffffff")};
  font-family: "Roboto Mono", monospace;

  &:hover {
    background-color: #1976d2;
    color: white;
  }
`;

const AnimatedCardContent = styled(CardContent)`
  animation: 1s ${fadeInAnimation};
`;

const CustomCard = styled(Card)`
  border: 1px solid #3cc5ff;
  background-color: rgba(26, 64, 93, 0.5);
  border-radius: 15px;
`;

const CustomCardHeader = styled(CardHeader)`
  color: #ffffff;
  font-family: "Roboto Mono", monospace;

  .MuiCardHeader-subheader {
    color: #ffffff;
  }
`;

interface ExperienceSectionProps {
  id: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ id }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
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
    <Section id={id} ref={ref} isVisible={isVisible}>
      <Content>
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
            <CustomCard>
              <CustomCardHeader
                title={selectedCompany.position}
                subheader={selectedCompany.name}
              />
              <AnimatedCardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{
                    color: "#ffffff",
                    fontFamily: '"Roboto Mono", monospace',
                  }}
                >
                  {selectedCompany.period}
                </Typography>
                {selectedCompany.description.map((item, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    style={{
                      color: "#ffffff",
                      fontFamily: '"Roboto Mono", monospace',
                    }}
                  >
                    - {item}
                  </Typography>
                ))}
              </AnimatedCardContent>
            </CustomCard>
          </Grid>
        </Grid>
      </Content>
    </Section>
  );
};

export default ExperienceSection;

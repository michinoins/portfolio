import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Box,
} from "@mui/material";
import { School, Work } from "@mui/icons-material";
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
const switchAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
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
  margin-right: 3rem;
`;

const SectionTitle = styled(Typography)`
  margin-bottom: 2rem;
  color: #b3ffff;
  font-family: "Roboto Mono", monospace;
`;

const CompanyButton = styled.button`
  display: flex;
  align-items: center;
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
  animation: 1s ${switchAnimation};
  height: 200px; // min-heightをheightに変更
  overflow-y: auto; // overflow-yを追加してスクロール可能にする
`;

const CustomCard = styled(Card)`
  background-color: rgba(26, 64, 93, 0.5);
  border-radius: 15px;
  height: 300px;
  min-width: 500px;
`;

const JobDescription = styled(Typography)`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-family: "Roboto Mono", monospace;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  overflow-wrap: break-word;

  &::before {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 8px solid #3cc5ff;
    margin-right: 25px;
  }
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
      name: "SixFactor.Inc(Vancouver, Canada)",
      position: "FullStack Developer",
      period: "October 2022 - February 2023",
      description: [
        "Designed technical solutions to ensure seamless feature integration by considering database relations,business rules, and accurately scoping the affected range.",
        "Succeeded in enhancing code quality and minimizing bug incidents by executing testing strategies using Jest.",
        "Improved frontend code quality through refactoring, resulting in enhanced user experience",
      ],
    },
    {
      name: "TeamLab.Inc(Tokyo, Japan)",
      position: "FullStack Lead Developer",
      period: "June 2021 - October 2022",
      description: [
        "Led a high-performing team of three members in the operation and maintenance phases to accomplish assigned business objectives while staying within budget.",
        "Automated manual tasks with AWS lambda and AWS EventBridge ",
        "Designed and Developed REST APIs and frontends components to accelerate project completion tasks",
      ],
    },
    {
      name: "TeamLab.Inc(Tokyo, Japan)",
      position: "Back-end Developer",
      period: "April 2020 - May 2021",
      description: [
        "Designed and developed Restful APIs, Batches with unit tests in Junit using Java, Kotlin,and SpringBoot.",
        "Conducted Internal coupling tests to squash bugs during development.",
        "Collaborated with front-end developers to integrate APIs with user interfaces.",
        "Automated testing and deployment using Github Actions and Jenkins",
      ],
    },
    {
      name: "University of Tsukuba (Ibaraki, Japan)",
      position: "Bachelor of Computer Science",
      period: "April 2018 - March 2020",
      description: [
        "As a Volleyball Club member, I played as an Opposite Hitter and contributed significantly to the team's score in games. 🏐",
        "Member of the English Speech Contest Club, taking part in several competitions and improving my public speaking skills. 🎤",
        "Created personal tools using JavaScript and LINE SDK, exploring various programming languages such as Prolog, Solidity, Java, and Python during coursework.",
      ],
    },
    {
      name: "University of Iwate (Iwate, Japan)",
      position: "Bachelor of Computer Science(transferred)",
      period: "April 2016 - March 2018",
      description: [
        "Participated in the International Exchange Club, where I collaborated with international students to sell country-specific food at cultural festivals.🇯🇵🌍",
        "Gained foundational knowledge of programming through studying C language and Java",
      ],
    },
  ];

  const selectedCompany = companies[selectedCompanyIndex];

  return (
    <Section id={id} ref={ref} isVisible={isVisible}>
      <Content>
        <SectionTitle variant="h5">Experience&Education</SectionTitle>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={3}>
            {companies.map((company, index) => (
              <CompanyButton
                key={index}
                onClick={() => setSelectedCompanyIndex(index)}
                active={selectedCompanyIndex === index}
              >
                {company.type === "education" ? (
                  <School
                    sx={{
                      marginRight: 1,
                      color: company.type === "education" ? "#8B4513" : null,
                    }}
                  />
                ) : (
                  <Work sx={{ marginRight: 1 }} />
                )}
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
                  <JobDescription key={index} variant="body1">
                    {item}
                  </JobDescription>
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

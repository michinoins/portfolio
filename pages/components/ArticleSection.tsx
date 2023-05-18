import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { AiFillBook } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";

const Section = styled.section<{ isVisible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 3rem 0;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1.7s ease-in-out;
`;

const Content = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const SectionTitle = styled(Typography)`
  margin-bottom: 2rem;
  color: #b3ffff;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledCard = styled(Card)`
  width: 300px;
  height: 280px;
  margin: 1rem;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-1rem);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

const CardTitle = styled(Typography)`
  font-weight: bold;
  color: #1976d2;
`;

const CardSubtitle = styled(Typography)`
  color: #1976d2;
`;

const CardDescription = styled(Typography)`
  text-align: justify;
  font-size: 0.8rem;
  height: 100%;
  overflow: hidden;
  color: #333;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

interface ArticleSectionProps {
  id: string;
}

const ArticleSection: React.FC<ArticleSectionProps> = ({ id }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const articles = [
    {
      title: "Build a CRUD App with Clean Architecture",
      subtitle: "Published on Dev.io - May 6, 2023",
      description:
        "In this article, I demonstrate how to create a CRUD API using Clean Architecture with MySQL as the database,Echo as the framework, and GORM as the ORM.",
      link: "https://dev.to/michinoins/building-a-crud-app-with-mysql-gorm-echo-and-clean-architecture-in-go-h6d",
    },
    {
      title: "Experiment of Single-Threaded vs Multi-Threaded Servers",
      subtitle: "Published on Dev.io - May 17, 2023",
      description:
        "I did an experiment using Node.js and Java to compare single-threaded and multi-threaded servers.",
      link: "https://dev.to/michinoins/single-threaded-vs-multi-threaded-servers-an-experiment-with-nodejs-and-java-3183",
    },
  ];

  return (
    <Section id={id} ref={ref} isVisible={isVisible}>
      <Content>
        <SectionTitle variant="h5">Articles & Blogs</SectionTitle>
        <CardContainer>
          {articles.map((article, index) => (
            <StyledCard key={index}>
              <CardActionArea href={article.link} target="_blank">
                <CardContent>
                  <IconContainer>
                    <AiFillBook size={48} />
                  </IconContainer>
                  <CardTitle variant="h5">{article.title}</CardTitle>
                  <CardSubtitle variant="subtitle1">
                    {article.subtitle}
                  </CardSubtitle>
                  <CardDescription>{article.description}</CardDescription>
                </CardContent>
              </CardActionArea>
            </StyledCard>
          ))}
        </CardContainer>
      </Content>
    </Section>
  );
};

export default ArticleSection;

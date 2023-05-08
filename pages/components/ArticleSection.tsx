import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { AiFillBook } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 3rem 0;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
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
  color: #ffffff;
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
  color: #ffffff;
`;

const CardSubtitle = styled(Typography)`
  color: #1976d2;
`;

const CardDescription = styled(Typography)`
  text-align: justify;
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
      title: "Article 1",
      subtitle: "Published on Medium - January 1, 2023",
      description:
        "This is a sample article about front-end development best practices and tips to improve the performance of your React applications.",
    },
    {
      title: "Article 2",
      subtitle: "Published on Dev.to - February 15, 2023",
      description:
        "This is a sample article about implementing RESTful APIs using Node.js, Express, and MongoDB.",
    },
    {
      title: "Article 3",
      subtitle: "Published on My Personal Blog - March 20, 2023",
      description:
        "This is a sample article about developing mobile applications using React Native and best practices for optimizing their performance.",
    },
  ];

  return (
    <Section id={id} ref={ref} isVisible={isVisible}>
      <Content>
        <SectionTitle variant="h4">Articles & Blogs</SectionTitle>
        <CardContainer>
          {articles.map((article, index) => (
            <StyledCard key={index}>
              <CardActionArea>
                <CardContent>
                  <IconContainer>
                    <AiFillBook size={24} />
                    <CardTitle variant="h5">{article.title}</CardTitle>
                  </IconContainer>
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

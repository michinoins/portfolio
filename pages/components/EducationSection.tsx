import React from 'react';
import { Typography, Card, CardContent, CardHeader } from '@mui/material';
import  styled  from '@emotion/styled';

const Section = styled.section`
  padding: 3rem 0;
`;

const SectionTitle = styled(Typography)`
  margin-bottom: 2rem;
  text-align: center;
`;

const EducationSection: React.FC = () => {
  return (
    <Section>
      <SectionTitle variant="h4">Education</SectionTitle>
      <Card>
        <CardHeader title="Your University" subheader="Bachelor of Science in Computer Science" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Graduated in 2020
          </Typography>
        </CardContent>
      </Card>
    </Section>
  );
};

export default EducationSection;

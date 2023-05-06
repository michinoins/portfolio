import React from "react";
import { Grid, Typography, Chip } from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 3rem 0;
`;

const SectionTitle = styled(Typography)`
  margin-bottom: 2rem;
  text-align: center;
`;

const SkillChip = styled(Chip)`
  margin: 0.5rem;
`;

const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js"];

const SkillsSection: React.FC = () => {
  return (
    <Section>
      <SectionTitle variant="h4">Skills</SectionTitle>
      <Grid container justifyContent="center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <SkillChip label={skill} />
          </motion.div>
        ))}
      </Grid>
    </Section>
  );
};

export default SkillsSection;

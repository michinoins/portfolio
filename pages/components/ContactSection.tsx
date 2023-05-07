import React from "react";
import { Typography, IconButton, Tooltip } from "@mui/material";
import styled from "@emotion/styled";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "@mui/material";

const Section = styled.section`
  padding: 3rem 0;
`;

const SectionTitle = styled(Typography)`
  margin-bottom: 2rem;
  text-align: center;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialIconButton = styled(Link)`
  margin: 0 1rem;
`;

interface ContactSectionProps {
  id: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  return (
    <Section id={id}>
      <SectionTitle variant="h4">Contact</SectionTitle>
      <SocialIcons>
        <Tooltip title="Email">
          <SocialIconButton href="mailto:your.email@example.com">
            <EmailIcon fontSize="large" />
          </SocialIconButton>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <SocialIconButton
            href="https://www.linkedin.com/in/yourusername/"
            target="_blank"
          >
            <LinkedInIcon fontSize="large" />
          </SocialIconButton>
        </Tooltip>
        <Tooltip title="GitHub">
          <SocialIconButton
            href="https://github.com/yourusername"
            target="_blank"
          >
            <GitHubIcon fontSize="large" />
          </SocialIconButton>
        </Tooltip>
        <Tooltip title="Twitter">
          <SocialIconButton
            href="https://twitter.com/yourusername"
            target="_blank"
          >
            <TwitterIcon fontSize="large" />
          </SocialIconButton>
        </Tooltip>
      </SocialIcons>
    </Section>
  );
};

export default ContactSection;

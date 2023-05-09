import React from "react";
import { Tooltip } from "@mui/material";
import styled from "@emotion/styled";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "@mui/material";

const Section = styled.section`
  padding: 3rem 0;
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

const SocialIconButton = styled(Link)`
  margin: 2rem 4rem;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

const StyledLinkedInIcon = styled(LinkedInIcon)`
  font-size: 3rem;
`;

const StyledGitHubIcon = styled(GitHubIcon)`
  font-size: 3rem;
`;

interface ContactSectionProps {
  id: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  return (
    <Section id={id}>
      <SocialIcons>
        <Tooltip title="LinkedIn">
          <SocialIconButton
            href="https://www.linkedin.com/in/ichinomikiya/"
            target="_blank"
          >
            <StyledLinkedInIcon />
          </SocialIconButton>
        </Tooltip>
        <Tooltip title="GitHub">
          <SocialIconButton
            href="https://github.com/michinoins"
            target="_blank"
          >
            <StyledGitHubIcon />
          </SocialIconButton>
        </Tooltip>
      </SocialIcons>
    </Section>
  );
};

export default ContactSection;

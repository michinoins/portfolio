import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";

const StyledAppBar = styled(AppBar)`
  background-color: #333;
`;

const Title = styled(Typography)`
  flex-grow: 1;
`;

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Header: React.FC = () => {
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <Title variant="h6">Portfolio</Title>
        <Button color="inherit" onClick={() => scrollToSection("about")}>
          About
        </Button>
        <Button
          color="inherit"
          onClick={() => scrollToSection("education&experience")}
        >
          Education&Experience
        </Button>
        <Button color="inherit" onClick={() => scrollToSection("projects")}>
          Projects
        </Button>
        <Button color="inherit" onClick={() => scrollToSection("articles")}>
          Articles
        </Button>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;

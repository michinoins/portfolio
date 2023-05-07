import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";

const StyledAppBar = styled(AppBar)`
  background-color: #333;
`;

const MenuButton = styled(IconButton)`
  margin-right: 16px;
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
        <MenuButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </MenuButton>
        <Title variant="h6">My Portfolio</Title>
        <Button color="inherit" onClick={() => scrollToSection("about")}>
          About
        </Button>
        <Button color="inherit" onClick={() => scrollToSection("skills")}>
          Skills
        </Button>
        <Button color="inherit" onClick={() => scrollToSection("education")}>
          Education
        </Button>
        <Button color="inherit" onClick={() => scrollToSection("experience")}>
          Experience
        </Button>
        <Button color="inherit" onClick={() => scrollToSection("contact")}>
          Contact
        </Button>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;

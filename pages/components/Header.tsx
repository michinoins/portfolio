import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";

const StyledAppBar = styled(AppBar)`
  background-color: #333;

  @media (max-width: 768px) {
    .desktopMenu {
      display: none;
    }
  }

  @media (min-width: 769px) {
    .mobileMenu {
      display: none;
    }
  }
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
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <Title variant="h6">Portfolio</Title>
        <IconButton
          className="mobileMenu"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={isOpen} onClose={handleDrawerToggle}>
          {/* ここにモバイルメニューの内容を記述 */}
        </Drawer>
        <div className="desktopMenu">
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
        </div>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;

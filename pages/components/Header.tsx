import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import  styled  from '@emotion/styled';

const StyledAppBar = styled(AppBar)`
  background-color: #333;
`;

const MenuButton = styled(IconButton)`
  margin-right: 16px;
`;

const Title = styled(Typography)`
  flex-grow: 1;
`;

const Header: React.FC = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <MenuButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </MenuButton>
        <Title variant="h6">My Portfolio</Title>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;

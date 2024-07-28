import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: 'aqua' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Talent Market
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

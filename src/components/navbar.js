import * as React from 'react';
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo_seyferstudios from '../assets/images/minilogo_ss.png'


function NavBar({ onMenuClick }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={onMenuClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexGrow: 1
                    }}>
                        Seyfer Studios YouTube's Videos Formatting Web Tool
                    </Typography>
                    <Avatar alt="Seyfer Studios Logo" src={logo_seyferstudios} variant="rounded"></Avatar>
                </Toolbar>
            </AppBar>
        </Box>
    );
}


export default NavBar;
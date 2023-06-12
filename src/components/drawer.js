import { useState } from "react";

import {
    Avatar,
    Box,
    Button,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";

// Assets
import logoSoulcaliburVI from "../assets/images/logo_soulcaliburvi.webp"
import logoGranturismo7 from "../assets/images/logo_granturismo7.webp"

// Games objects array
const games = [
    { id: 1, name: 'Soulcalibur VI', icon: logoSoulcaliburVI },
    { id: 2, name: 'Gran Turismo 7', icon: logoGranturismo7 }
];


function DrawerCompact() {
    /**
     * Icons only drawer
     */
    return (
        <Box sx={{
            display: "inline-block", // Adjust Box size to its content
        }}>
            <List>
                {games.map((game, index) => (
                    <ListItem key={game.name} disablePadding>
                        <ListItemButton>
                            <ListItemIcon
                                sx={{ minWidth: 0 }} // Center list item icon
                            >
                                <Avatar alt={game.name} src={game.icon} variant="circular"></Avatar>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}


function DrawerExpanded() {
    /**
     * Icons + texts drawer
     */
    return (
        <Box sx={{
            display: "inline-block", // Adjust Box size to its content
        }}>
            <List>
                {games.map((game, index) => (
                    <ListItem key={game.name} disablePadding>
                        <ListItemButton>
                            <ListItemIcon sx={{
                                minWidth: 0, // Center list item icon
                                paddingRight: 1 // Space between icon and text
                            }}>
                                <Avatar alt={game.name} src={game.icon} variant="rounded"></Avatar>
                            </ListItemIcon>
                            <ListItemText>{game.name}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}


function Drawer({ drawerCompact }) {
    // const [drawerCompact, setDrawercompact] = useState(true);
    return (
        drawerCompact ? <DrawerCompact /> : <DrawerExpanded />
    );
}


export default Drawer;
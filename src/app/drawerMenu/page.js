"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerMenu = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (isOpen) => () => {
        setOpen(isOpen);
    };

    return (
        <div>
            <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                <List>
                    {['Home', 'About', 'Portfolio', 'Contact'].map((text) => (
                        <ListItem  key={text}>
                            <Link href={"/"+ text.toLowerCase()}> {text}</Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
};

export default DrawerMenu;
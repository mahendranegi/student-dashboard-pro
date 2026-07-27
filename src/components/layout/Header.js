import React from 'react'
import { CustomHeader } from "../../assets/styled";
import Button from "@mui/material/Button";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Notification from '../NotificationHead';
import NotificationHead from '../NotificationHead';
function Header() {
  return (
    <CustomHeader>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hello,Mahendra
          </Typography>
         
 <IconButton aria-label="show 4 unread messages">
      <Badge badgeContent={4} color="primary">
        <MailIcon />
      </Badge>
    </IconButton>

    <IconButton aria-label="show 5 unread messages">
      <Badge badgeContent={5} color="primary">
        <NotificationsIcon />
      </Badge>
    </IconButton>
<NotificationHead />

        </Toolbar>
      </AppBar>
    </Box>
    </CustomHeader>
  )
}

export default Header
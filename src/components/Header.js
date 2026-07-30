import React, { useContext } from 'react'
import { CustomHeader } from "../assets/styled";
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
import Notification from './NotificationHead';
import NotificationHead from './NotificationHead';
import InputAdornment from "@mui/material/InputAdornment";
import { userContext } from '../context/ContextData';
import SearchInput from './SearchInput';
function Header({user}) {
  const{theam} = useContext(userContext)
  console.log(user,'____Header')
  return (
    <CustomHeader>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <SearchInput placeholder="Enter project name.."/>
         
         <div className="headerRight">
          
           <div>
 <IconButton aria-label="show 4 unread messages">
      <Badge badgeContent={4} color="primary">
        <MailIcon />
      </Badge>
    </IconButton>

     <IconButton aria-label="show new notifications">
      <Badge color="secondary" variant="dot">
        <NotificationsIcon />
      </Badge>
    </IconButton>
   </div>
<NotificationHead user={user}/>
</div>
        </Toolbar>
      </AppBar>
    </Box>
    </CustomHeader>
  )
}

export default Header
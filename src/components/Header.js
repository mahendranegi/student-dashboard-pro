import React, { useContext, useState } from 'react'
import { CustomHeader } from "../assets/styled";
import Button from "@mui/material/Button";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Notification from './NotificationHead';
import NotificationHead from './NotificationHead';
import InputAdornment from "@mui/material/InputAdornment";
import { userContext } from '../context/ContextData';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchInput from './SearchInput';
import Dropdown from './Dropdown';
function Header({user,handleSideBarToggle,open}) {
  const {theam,handleTheam,setTheam} = useContext(userContext)
  
  // const{theam} = useContext(userContext)
  const[showProfile,setShowProfile] = useState(false);
  console.log(user,'____Header')

  //

  const handleNotify = () =>{
    console.log('jjjj')
setShowProfile((prev)=> !prev);
  }
  return (
    <CustomHeader>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div style={{display: 'flex',gap: '12px',alignItems:'center'}}>
          
          

{open === true ? <MenuIcon onClick={handleSideBarToggle} style={{cursor: 'pointer',color: '#000',fontWeight: 'bold',fontSize: '36px'}}/> : <CloseIcon onClick={handleSideBarToggle} style={{cursor: 'pointer',color: '#000',fontWeight: 'bold',fontSize: '36px'}}/>}

          <SearchInput placeholder="Enter project name.."/>
          </div>
         
         <div className="headerRight">
          
           <div className='gapAlign'>
            {theam === "Dark Mode" ?  <DarkModeIcon onClick={handleTheam}/> :  <LightModeIcon onClick={handleTheam}/>}

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
<NotificationHead user={user} onClick={handleNotify} showProfile={showProfile}/>
</div>
{/* <Dropdown /> */}
        </Toolbar>
      </AppBar>
    </Box>
    </CustomHeader>
  )
}

export default Header
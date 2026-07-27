import React from 'react'
import { SidebarStyle } from "../../assets/styled";
import logoImg from "../../assets/images/logo-new.png";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import NotificationHead from '../NotificationHead';
import Button from "@mui/material/Button";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
function Sidebar() {

  return (
    <SidebarStyle>
      <div>
        <img src={logoImg} alt = {logoImg} />
      <ul>
        <li><DashboardIcon />Dashboard</li>
        <li><PeopleIcon/>Teachers</li>
        <li><AccessibilityIcon />Students</li>
        <li><SmsFailedIcon />Notice</li>
       </ul>
      </div>
      <div className='sideBarFooter'>
        <Button variant="outlined" size="small"><LightModeIcon />Dark Mode<DarkModeIcon /></Button>
        <NotificationHead />
      </div>
      
    </SidebarStyle>
  )
}

export default Sidebar
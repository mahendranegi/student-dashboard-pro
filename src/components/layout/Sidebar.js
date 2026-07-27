import React from 'react'
import { SidebarStyle } from "../../assets/styled";
import logoImg from "../../assets/images/logo-new.png";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
function Sidebar() {
  return (
    <SidebarStyle>
      <img src={logoImg} alt = {logoImg} />
      <ul>
        <li><DashboardIcon />Dashboard</li>
        <li><PeopleIcon/>Teachers</li>
        <li><AccessibilityIcon />Students</li>
        <li><SmsFailedIcon />Notice</li>
       </ul>
    </SidebarStyle>
  )
}

export default Sidebar
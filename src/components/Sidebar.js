import React, { useContext, useState } from 'react'
import { SidebarStyle } from "../assets/styled";
import logoImg from "../assets/images/logo-new.png";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import NotificationHead from './NotificationHead';
import Button from "@mui/material/Button";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { userContext } from '../context/ContextData';
import { NavLink } from "react-router-dom";
import Switch from '@mui/material/Switch';
const label = { slotProps: { input: { 'aria-label': 'Switch demo' } } };
function Sidebar() {
const {theam,handleTheam,setTheam} = useContext(userContext)
const context = useContext(userContext);
  return (
    <SidebarStyle>
      <div className="sideBarbg">
      <div>
        <img src={logoImg} alt = {logoImg} />
      <ul>
        <li>
          <NavLink to="/dashboard">
      <DashboardIcon />
      Dashboard
    </NavLink>
         </li>
        <li>
          <NavLink to="/tasks">
      <PeopleIcon />
      Tasks
    </NavLink>
          
          </li>
        <li>
          <NavLink to="/students">
      <SmsFailedIcon />
      Students
    </NavLink>
          </li>
          <li>
          <NavLink to="/teachers">
      <SmsFailedIcon />
      Teachers
    </NavLink>
          </li>
        <li>
           <NavLink to="/profile">
      <AccessibilityIcon />
      Profile
    </NavLink>
</li>
       </ul>
      </div>
      <div className='sideBarFooter'>

        <Button
  variant="outlined"
  size="small"
  onClick={handleTheam}
  sx={{
    bgcolor: theam === "Dark Mode" ? "#000" : "##212521",
    color: theam === "Dark Mode" ? "#fff" : "#000",
    borderColor: theam === "Dark Mode" ? "#fff" : "#000",
    "&:hover": {
      bgcolor: theam === "Dark Mode" ? "#222" : "#020751",
    },
  }}
>
  {theam === "Dark Mode" ?  <Switch {...label} defaultChecked /> :  <Switch {...label} defaultChecked />}
  {theam}
</Button>
        
        <NotificationHead />
      </div>
      </div>
    </SidebarStyle>
  )
}

export default Sidebar
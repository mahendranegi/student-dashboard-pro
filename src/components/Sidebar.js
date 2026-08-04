import React, { useContext, useState } from 'react'
import { SidebarStyle } from "../assets/styled";
import logoImg from "../assets/images/logo-new.png";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import NotificationHead from './NotificationHead';
import Button from "@mui/material/Button";

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import { userContext } from '../context/ContextData';
import { NavLink } from "react-router-dom";
// import LightModeIcon from '@mui/icons-material/LightMode';

import Switch from '@mui/material/Switch';
const label = { slotProps: { input: { 'aria-label': 'Switch demo' } } };
function Sidebar({open,handleNotify,showProfile,setShowProfile}) {
const {theam,handleTheam,setTheam} = useContext(userContext)
const context = useContext(userContext);
  return (
    <SidebarStyle>
      <div className="sideBarbg">
      <div>
       <div className="logoWrapper">
          <img src={logoImg} alt="SchoolHub Logo" className="logoImg" />
        </div>
      <ul>
        <li>
          <NavLink to="/dashboard">
      <DashboardIcon />
      {open === true ? 'Dashboard' : ''}
      
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
      <PeopleAltIcon />
      Students
    </NavLink>
          </li>
          <li>
          <NavLink to="/teachers">
      <AccessibilityIcon />
      Teachers
    </NavLink>
          </li>
        <li>
           <NavLink to="/profile">
      <ManageAccountsIcon />
      Profile
    </NavLink>
</li>
       </ul>
      </div>
      <div className='sideBarFooter'>
        {/* <NotificationHead onClick={handleNotify} showProfile={showProfile} /> */}
      </div>
      </div>
    </SidebarStyle>
  )
}

export default Sidebar
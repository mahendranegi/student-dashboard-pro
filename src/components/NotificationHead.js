import React, { useState,useContext } from 'react'
import { NotificationStyle } from "../assets/styled";
import Person3Icon from '@mui/icons-material/Person3';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { userContext } from "../context/ContextData";
// import { useContext } from 'react';
import { NavLink } from "react-router-dom";


function NotificationHead({showProfile,onClick}) {
    const { user } = useContext(userContext); 
  
  
  return (
    <NotificationStyle onClick={onClick}>
      {/* <div className='user'>
         <Person3Icon />
      </div> */}
      <img src={user?.image} alt={user?.image}/>
    
    <div>
      <h4>{user?.name}</h4>
      <span>{user?.work}</span>
    </div>

    {showProfile && <div className='cardSec'>
      <div className='info'>
        <img src={user?.image} alt={user?.image} />
        <div>
          <h6>{user?.name}</h6>
          <span>{user?.email}</span>
        </div>
      </div>
      <ul>
        <li><NavLink to="/profile">Settings</NavLink></li>
         <li><NavLink to="/">Logout</NavLink></li>
      </ul>
    </div>}
    </NotificationStyle>

  )
}

export default NotificationHead
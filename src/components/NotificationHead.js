import React, { useState } from 'react'
import { NotificationStyle } from "../assets/styled";
import Person3Icon from '@mui/icons-material/Person3';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
function NotificationHead({user,showProfile,onClick}) {
  
  // console.log(user,'++++++++++')
  return (
    <NotificationStyle onClick={onClick}>
      <div className='user'>
         <Person3Icon />
      </div>
      {/* <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      >
        M
      </Avatar> */}
    
    <div>
      <h4>{user?.name}</h4>
      <span>{user?.work}</span>
    </div>

    {showProfile && <div className='cardSec'>
      <div className='info'>
        <h1>h</h1>
        <div>
          <h6>Mahendra</h6>
          <span>zhsdfhsdjkhf</span>
        </div>
      </div>
      <ul>
        <li>Settings</li>
         <li>Logout</li>
      </ul>
    </div>}
    </NotificationStyle>

  )
}

export default NotificationHead
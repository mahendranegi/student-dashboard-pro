import React from 'react'
import { NotificationStyle } from "../assets/styled";
import Person3Icon from '@mui/icons-material/Person3';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
function NotificationHead() {
  return (
    <NotificationStyle>
      {/* <div className='user'>
         <Person3Icon />
      </div> */}
      <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      >
        M
      </Avatar>
    
    <div>
      <span>Mahendra</span>
      <p>Admin</p>
    </div>
    </NotificationStyle>
  )
}

export default NotificationHead
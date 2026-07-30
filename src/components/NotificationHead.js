import React from 'react'
import { NotificationStyle } from "../assets/styled";
import Person3Icon from '@mui/icons-material/Person3';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
function NotificationHead({user}) {
  // console.log(user,'++++++++++')
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
      <h4>{user?.name}</h4>
      <span>{user?.work}</span>
    </div>
    </NotificationStyle>
  )
}

export default NotificationHead
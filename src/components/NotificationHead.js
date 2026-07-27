import React from 'react'
import { NotificationStyle } from "../assets/styled";
import Person3Icon from '@mui/icons-material/Person3';
function NotificationHead() {
  return (
    <NotificationStyle>
      <div className='user'>
         <Person3Icon />
      </div>
    
    <div>
      <span>Mahendra</span>
      <p>Admin</p>
    </div>
    </NotificationStyle>
  )
}

export default NotificationHead
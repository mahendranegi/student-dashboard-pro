import React from 'react'
import { SettingStyle } from "../assets/styled";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import MyImg from '../assets/images/profile.png';
import NotificationHead from '../components/NotificationHead';
function Profile({user}) {
  console.log(user,'profile logout')
  return (
    <SettingStyle>
        <Box sx={{ mb: 3 }}>
                 <h1>Profile </h1>
              </Box>
 <div className='profileSec'>
             <div className='flexBodyMain'>
              <div>
                <NotificationHead />
                <ul>
                <li>Profile</li>
                <li>Account</li>
              </ul>
              </div>
              
              <div>
                <div className="flexBody">
                  <img src={MyImg} alt={MyImg}/>
              <div>
                <Button  variant="outlined">Upload Image</Button>
                <Typography sx={{ mb: 1, fontWeight: 500 }}>
                            Use Google account avatar
                          </Typography>
               
              </div>
                </div>
                <p>Name:</p>
                <input value={user?.name}/>
                </div>
              

              </div>
             </div>
    </SettingStyle>
  )
}

export default Profile
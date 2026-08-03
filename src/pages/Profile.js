import React, { useContext, useState } from 'react'
import { SettingStyle } from "../assets/styled";

import darkBg from "../assets/images/dark.jpg";
import light from "../assets/images/light.jpg";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import MyImg from '../assets/images/profile.png';
import NotificationHead from '../components/NotificationHead';
import { userContext } from '../context/ContextData';
function Profile() {
  const[activeTab,setActiveTab] = useState(3);
  const[check,setCheck] = useState('light');
 

  const {setTheam,theam,handleTheam} = useContext(userContext);
  console.log(theam,'llll')

  const handleOne= () =>{

    setCheck('check')
  }

  const handleTwo= () =>{

    setCheck('')
  }
  return (
    <SettingStyle>
       
 <div className='profileSec1'>
             <div className='flexBodyMain'>
              <div className='profileNotify'>
                <NotificationHead />

                <ul>
                <li className={activeTab === 1 ? 'active' : ''} onClick={()=>setActiveTab(1)}>Profile</li>
                <li className={activeTab === 2 ? 'active' : ''} onClick={()=>setActiveTab(2)}>Account</li>
                <li className={activeTab === 3 ? 'active' : ''} onClick={()=>setActiveTab(3)}>Appearance</li>
                <li className={activeTab === 4 ? 'active' : ''} onClick={()=>setActiveTab(4)}>Password</li>
              </ul>
              </div>
              
              <div className='rightPannel'>
                {activeTab === 1 && <div>
                 <Box sx={{ mb: 3 }}>
                 <h1>Profile </h1>
              </Box>
                <div className="flexBody">
                  <img src={MyImg} alt={MyImg}/>
              <div>
                <Button  variant="outlined">Upload Image</Button>
                <Typography sx={{ mb: 1, fontWeight: 500 }}>
                            Use Google account avatar
                          </Typography>
               
              </div>
                </div>
                <Box  sx={{ mb: 3,mt: 4 }}>
                          <Typography>Username</Typography>
                
                          <TextField
                            fullWidth
                            placeholder="Enter your email"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                          />
                
                          {/* {error && email.trim() === "" && (
                            <p className="error">Please enter email</p>
                          )} */}
                        </Box>
                         <Button
                                  variant="contained"
                                  fullWidth
                                  type="submit"
                                  sx={{
                                    background: "#488df0",
                                    "&:hover": {
                                      background: "#488df0",
                                    },
                                  }}
                                >
                                  Update Username
                                </Button>


                </div>}

                {activeTab === 2 && 
                <div>
                   <Box sx={{ mb: 3 }}>
                 <h1>Account </h1>
              </Box>
                </div>
                }

                {activeTab === 3 && 
                 <div>
                   <Box sx={{ mb: 3 }}>
                 <h1>Appearance </h1>


              </Box>

              <div className='theamDiv'>
                           
                      
                {/* {activeTab === 1 ? <img onClick={()=>setActiveTab(1)} className={activeTab === 1 ? 'aActive' : '' } src={darkBg}/> : <img onClick={()=>setActiveTab(2)} className={activeTab === 2 ? 'aActive' : '' }  src={light}/>} */}
                    
                     <span
    onClick={() => {
      setCheck("dark")
    document.querySelector('.commonLayoutSec').classList.add('darkBg');
    }}
    className={check === "dark" ? "active" : ""}
  >
  <img src={darkBg}/>
  </span>

  <span
    onClick={() => {
      setCheck("light")
     document.querySelector('.darkBg').classList.remove('darkBg');
    }}
    className={check === "light" ? "active" : ""}
  >
   <img src={light}/>
  </span>

              </div>
                </div>
                }
                {activeTab === 4 && 
                 <div>
                   <Box sx={{ mb: 3 }}>
                 <h1>Set Password </h1>
              </Box>
                </div>
                }
              
</div>
              </div>
             </div>
    </SettingStyle>
  )
}

export default Profile
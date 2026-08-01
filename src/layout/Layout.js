import React, { useContext } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Outlet } from "react-router-dom";
import { userContext } from '../context/ContextData';

function Layout({user,setOpen, open,handleSideBarToggle}) {
const {theam} = useContext(userContext);
  console.log('user________',user)
  return (
    <div  className={theam === "Dark Mode" ? 'commonLayoutSec' : 'commonLayoutSec darkBg'}>
      {open && <Sidebar open= {open}/>}

      <div className='rightPannel' style={{width: '100%',}}>
        <Header handleSideBarToggle={handleSideBarToggle} setOpen={setOpen} open= {open} user={user} />

        <div className="scrollContent">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
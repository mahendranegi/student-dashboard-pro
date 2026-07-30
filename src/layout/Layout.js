import React, { useContext } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Outlet } from "react-router-dom";
import { userContext } from '../context/ContextData';

function Layout({user}) {
const {theam} = useContext(userContext);
  console.log('user________',user)
  return (
    <div style={{ display: "flex", gap: '24px' }} className={theam === "Dark Mode" ? 'abc' : 'darkBg'}>
      <Sidebar/>

      <div className='rightPannel' style={{width: '100%',}}>
        <Header user={user}/>

        <div className="scrollContent">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
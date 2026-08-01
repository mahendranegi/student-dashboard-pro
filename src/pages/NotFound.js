import React, { useState } from 'react'
import notfoundImg from '../assets/images/notfound.png'
import { NotfoundStyle } from "../assets/styled";

function NotFound({title,subtitle }) {
  // useState
  return (

   <NotfoundStyle>
      <div className="alignCenter">
        <h3>{title}</h3>

        <img src={notfoundImg} alt="Not Found" />

        <p>{subtitle}</p>
      </div>
    </NotfoundStyle>
  )
}

export default NotFound
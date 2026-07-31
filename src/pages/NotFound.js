import React from 'react'
import notfoundImg from '../assets/images/notfound.png'
import { NotfoundStyle } from "../assets/styled";

function NotFound() {
  return (

    <NotfoundStyle>
      <div className='alignCenter'>
        <h4>No results found for "hhhssssaaa"</h4>
      <img src={notfoundImg} alt={notfoundImg}/>
      <h2>Try checking the spelling or search with different keywords.</h2>
      </div>
      
      
      </NotfoundStyle>
  )
}

export default NotFound
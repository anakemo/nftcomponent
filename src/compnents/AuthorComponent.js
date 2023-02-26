import { Avatar } from '@mui/material'
import React from 'react'
import '../App.css'


export const AuthorComponent = (props) => {
  return (
    <div style={{display:"flex",justifyContent:"space-between", width:"230px"}}>
    <Avatar
  alt="Remy Sharp"
  src={props.image}
  sx={{ width: 40, height: 40 , border:"1px solid white"}}
  />
 <div style={{color:"hsl(215, 51%, 70%)" }} >creation of <p  className='autText' >{props.author}</p></div>
    </div>
  )
}



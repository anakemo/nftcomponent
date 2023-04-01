import React from 'react'

export const TitleCompnents = (props) => {
  return (
    <div  style={{color:"hsl(0, 0%, 100%)"}} >
      <p className='hovText' style={{fontFamily:"Outfit", fontStyle:"normal",fontSize:"22px", fontWeight:"600", Lineheight:"27.72px"}}>{props.title}</p>
    </div>
  )
}



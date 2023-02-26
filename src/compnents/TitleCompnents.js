import React from 'react'

export const TitleCompnents = (props) => {
  return (
    <div  style={{color:"hsl(0, 0%, 100%)"}} >
      <p className='hovText' style={{fontSize:"22px", fontWeight:"700", marginLeft:"-200px",}}>{props.title}</p>
    </div>
  )
}



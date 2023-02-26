import React from 'react'

export const ImageComponen = (props) => {
   

  return (
    <div className='imagewraper' >
        
    <img src={props.image} alt='img' 
    style={{width:"400px", height:"400px",borderRadius:"15px", cursor:"pointer"}} 
    onClickCapture={() => props.setActive(!props.active)}
    
     className="img"/>
  
    </div>
  )
}



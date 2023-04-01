

import { ImageComponen } from './compnents/ImageComponen';
import { TitleCompnents } from './compnents/TitleCompnents';
import EqImage from './images/image-equilibrium.jpg';
import iconC from './images/favicon-32x32.png'
import Autor from './images/image-avatar.png';
import { DescriptionCompnents } from './compnents/DescriptionCompnents';
import { CodeComponents } from './compnents/CodeComponents';
import { Box, height, width } from '@mui/system';
import styled from '@emotion/styled';
import { DateComponents } from './compnents/DateComponents';
import { AuthorComponent } from './compnents/AuthorComponent';
import React, { useState } from 'react';
import { HoverImgsComp } from './compnents/HoverImgsComp';



function App() {
  const [show,setShow]=useState(false);
// const StyledBox=styled(Box)(()=>({
//   margin:"152px 545px",
//   padding:"24px 24px",
//   width:"350px",
//   height:"596px",
//   backgroundColor:"hsl(216, 50%, 16%)",
//   borderRadius:"8px",
//   @media (max-width: 768px) {
//     flex-direction: column;
//   }

  


// }))

const StyledDiv = styled.div`
margin:152px 545px;
padding:24px 24px;
width:350px;
height:596px;
background-Color:hsl(216, 50%, 16%);
borderRadius:8px;


@media (max-width: 768px) {


margin:62px 24px;
width:327px;
height:543px;


}
 
`;






const Data=[{
  title:"Equilibrium #3429",
  image:EqImage,
  icon:iconC,
  description:"Our Equilibrium collection promotes balance and calm.",
  code:"0.041 ETH",
  date:"3 days left",
  authorImage:Autor,
  author:"Jules Wyvem"
}];


  return (
    <div className="App">
      <StyledDiv >
    {Data.map((item)=>
    <>
   
    { <ImageComponen icon={item.icon} image={item.image} show={show} setShow={setShow} />}
    
      <TitleCompnents title={item.title}/>
      <DescriptionCompnents  description={item.description}/>
      <div style={{width:"90%" ,marginLeft:"15px", display:"flex" , justifyContent:"space-between"}}>
      <CodeComponents code={item.code}/>
      <DateComponents date={item.date}/>
      </div>
      <hr style={{backgroundColor:"hsl(215, 32%, 27%)"}}/>
      <AuthorComponent image={item.authorImage} author={item.author}/>
      </>
   
    )}



</StyledDiv>
</div>
  );


}

export default App;

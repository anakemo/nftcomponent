
import './App.css';
import { ImageComponen } from './compnents/ImageComponen';
import { TitleCompnents } from './compnents/TitleCompnents';
import EqImage from './images/image-equilibrium.jpg'
import Autor from './images/image-avatar.png'
import { DescriptionCompnents } from './compnents/DescriptionCompnents';
import { CodeComponents } from './compnents/CodeComponents';
import { Box, height, width } from '@mui/system';
import styled from '@emotion/styled';
import { DateComponents } from './compnents/DateComponents';
import { AuthorComponent } from './compnents/AuthorComponent';
import { useState } from 'react';
import { HoverImgsComp } from './compnents/HoverImgsComp';


function App() {
  const [active,setActive]=useState(false);
const StyledBox=styled(Box)(()=>({
  margin:"auto",
 
  width:"430px",
  padding:"30px",
  height:"800px",
  backgroundColor:"hsl(216, 50%, 16%)",
  borderRadius:"20px",

  
}))
const Data=[{
  title:"Equilibrium #3429",
  image:EqImage,
  description:"Our Equilibrium collection promotes balance and calm.",
  code:"0.041 ETH",
  date:"3 days left",
  authorImage:Autor,
  author:"Jules Wyvem"
}];


  return (
    <div className="App">
    {Data.map((item)=>
   <StyledBox >
    { active ? <HoverImgsComp image={item.image} setActive={setActive} active={active}/> :  <ImageComponen image={item.image} setActive={setActive} active={active}/>}
    
      <TitleCompnents title={item.title}/>
      <DescriptionCompnents  description={item.description}/>
      <div style={{width:"90%" ,marginLeft:"15px", display:"flex" , justifyContent:"space-between"}}>
      <CodeComponents code={item.code}/>
      <DateComponents date={item.date}/>
      </div>
      <hr style={{backgroundColor:"hsl(215, 32%, 27%)"}}/>
      <AuthorComponent image={item.authorImage} author={item.author}/>
   </StyledBox>
    )}



    </div>
  );
}

export default App;

import React from 'react';

import styled from '@emotion/styled';

import EqImage  from '../images/image-equilibrium.jpg'



export const ImageComponen = (props) => {

  

  const StyledImageWraper=styled.div `
 
  height: 302px;
  border-radius:8px;
  
 
  background-image:${(props) => `url(${props.image})`};
  background-size:cover;
  background-position:center;
  &:hover {
    .myIcon{
      display:block;
      position:absolute;
    }

   
    
    
  

    cursor: pointer;
    position:relative;
  
    height: 302px;
    border-radius:8px;
  
    background-image: linear-gradient(
    to right bottom,
     rgba(93, 153, 227, 0.648),
     rgba(15, 44, 205, 0.8)),

     
     ${(props) => `url(${props.image})`};
     
     

    
   
     background-size: cover;
     background-position: center;
    
   
  


      
    
    }
    
  @media (max-width: 390px) {
    margin:62px 24px;
  
    }


 
  
`;
   

 

  
  console.log(props.show);
  return (
   <StyledImageWraper  image={EqImage}  >

   
  {  <svg className='myIcon' display={"none"} style={{margin:"37% 42%"}}   width="44" height="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h48v48H0z"/><path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z" fill="#FFF" fill-rule="nonzero"/></g></svg> }

   </StyledImageWraper>
  )





}



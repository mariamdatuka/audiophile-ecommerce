import styled from "styled-components";


export const Main=styled.div`
    background-color:rgb(25, 25, 25);
`

export const Wrapper=styled.div`
    padding: 30px 150px;
    display:flex;
    justify-content:space-between;
    align-items:center;
   
   & img{
     width:500px;
   }

   & span{
    font-size:12px;
    color:rgba(255, 255, 255, 0.5);
    font-weight:300;
    letter-spacing:5px;
   }

   & h1 {
    color:#ffffff;
    font-size:56px;
   }

   & p{
    color:rgba(255, 255, 255, 0.5);
    font-size:14px;
    line-height:1.5;
   }

   & button{
    width:160px;
    height:45px;
    color:#ffffff;
    background-color:#D87D4A;
    border:none;
    cursor:pointer;
    transition: all 0.3s ease-in-out;
   }

   & button:hover{
    opacity: 0.75;
   }
`


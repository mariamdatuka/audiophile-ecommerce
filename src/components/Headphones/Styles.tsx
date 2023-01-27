import styled from "styled-components";

export  const Container=styled.div`
    background-color:rgb(25, 25, 25);
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 70px 150px;

    & h1{
        font-size:38px;
        color:#ffffff;
        text-transform:uppercase;
    }
  `
  export const Wrapper=styled.div`
    margin:0 150px;
    margin-top:150px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:150px;
  `
  export const WrapperTwo=styled.div`
    display:flex;
    gap:120px;
  `
  export const ImgBox=styled.div`
    width:500px;
    height:520px;
    border-radius:8px;
    background-color:#f1f1f1;
    display:flex;
    align-items:center;
    justify-content:center;
  `
  export const Info=styled.div`
    align-self:center;
    display:flex;
    flex-direction:column;
    gap:30px;

    & span{
    font-size:12px;
    color:#D87D4A;
    font-weight:300;
    letter-spacing:5px;
    }

    & h1 {
    color:#000000;
    font-size:38px;
   }

   & p{
    color: #353434;
    font-size:14px;
    line-height:1.5;
   }

   & a{
    width:160px;
    height:45px;
    color:#ffffff;
    background-color:#D87D4A;
    text-decoration:none;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    transition: all 0.3s ease-in-out;
   }

   & a:hover{
    opacity: 0.75;
   }
  `


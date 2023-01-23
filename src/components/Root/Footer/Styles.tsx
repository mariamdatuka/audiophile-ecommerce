import styled from "styled-components";

export const Wrapper=styled.div`
    background-color:rgb(25, 25, 25);
    padding: 70px 170px 40px 170px;

    @media (max-width: 420px) {
    padding:50px;
  }
`
export  const Container=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

    @media (max-width: 420px) {
    flex-direction: column;
    gap:40px;
  }
    
`
export const NavItems=styled.div`
    display:flex;
    gap:30px;

    & a{
        color:white;
        font-weight:500;
        text-decoration:none;
        font-size:13px;
    }

    @media (max-width: 420px) {
    flex-direction: column;
    align-items:center;
  }
`
export const Info=styled.div`
    margin-top:35px;
    display:flex;
    flex-direction:column;
    gap:50px;
    color:rgba(255, 255, 255, 0.5);
    line-height:1.7;
    font-size:16px;

    @media (max-width: 420px) {
     align-items:center;

     & div{
        text-align:center;
     }

     & div br{
        display:none;
     }
  }
`
export const Box=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;

    @media (max-width: 420px) {
    flex-direction: column;
    align-items:center;
  }
`
export const SocialIcons=styled.div`
    display:flex;
    gap:15px;

    & img{
        cursor:pointer;
    }
`


import styled from "styled-components";

export  const Container=styled.div`
    background-color:black;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 35px 150px;
    border-bottom:1px solid #ffffff;
`

export const NavItems=styled.div`
    display:flex;
    gap:10px;

    & li{
        color:white;
    }
`
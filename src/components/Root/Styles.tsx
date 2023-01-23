import styled from "styled-components";

export  const Container=styled.div`
    background-color:rgb(25, 25, 25);
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 35px 150px;
    border-bottom:1px solid #ffffff;

    & img{
        cursor:pointer;
    }
`

export const NavItems=styled.div`
    display:flex;
    gap:30px;

    & a{
        color:white;
        font-weight:500;
        text-decoration:none;
        transition:all 0.3s ease-in-out;
    }

    & a:hover{
        color:#D87D4A;
    }
`


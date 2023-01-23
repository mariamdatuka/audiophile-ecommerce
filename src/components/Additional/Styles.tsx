import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Container=styled.div`
    width:350px;
    height:200px;
    border-radius:8px;
    background-color: #F1F1F1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:20px;
    padding-top:50px;
    position:relative;

 & img {
    position:absolute;
    width:170px;
    top:-25%;
 }
 
 & h4{
    padding-top:30px;
    font-size:18px;
    letter-spacing:1.3px;
 }
`

export const Wrapper=styled.div`
    margin:150px 170px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:30px;
`

export const Shop=styled(Link)`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    width:120px;
    text-decoration:none;
    cursor:pointer;

 & img{
    position:static;
    width:5px;
    height:10px;
 }

 & p{
    font-size:14px;
    color:rgba(0, 0, 0, 0.5);
    transition:0.3s ease-in-out;
    font-weight:600;
 }

 & p:hover{
    color:#D87D4A;
 }
`
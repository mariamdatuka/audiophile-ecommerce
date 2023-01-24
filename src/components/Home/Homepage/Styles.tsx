import styled from 'styled-components'
import Speaker2 from '../../../assets/home/desktop/image-speaker-zx7.jpg';

export const Wrapper=styled.div`
    background-color:#D87D4A;
    margin:0 170px;
    border-radius:8px;
    height:560px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:100px;
    position:relative;

   & img{
    width:350px;
    align-self:end;
    z-index:999;
   }
`

export const Circles=styled.div`
    position:absolute;
    left:10%;
    z-index:0;

    & img{
        width:500px;
    }
`
export const Info=styled.div`
    align-self:end;
    padding-bottom:100px;
    display:flex;
    flex-direction:column;
    gap:30px;

    & h1{
        font-size:46px;
        color:#ffffff;
    }

    & p{
        font-size:14px;
        color:#ffffff;
        line-height:1.6;
    }

    & a{
        display:block;
        display:flex;
        align-items:center;
        justify-content:center;
        width:160px;
        height:48px;
        color:#ffffff;
        background-color:#000000;
        text-decoration:none;
        cursor:pointer;
        transition:all 0.3s ease-in;
    }

    & a:hover{
        background-color:#ffffff;
        color:#000000;
        border:1px solid black;
    }
`

export const Speaker=styled.div`
    margin:40px 170px 0 170px;
    height:350px;
    background:url(${Speaker2});
    background-repeat:no-repeat;
    background-size:contain;
    border-radius:8px;
    display:flex;
    flex-direction:column;
    align-items:right;
    justify-content:center;
    gap:30px;
    padding-left:70px;
    padding-bottom:50px;
    
    & h2{
        font-size:28px;
        letter-spacing:2px;
        color:#000000;
    }

    & a{
        display:block;
        display:flex;
        align-items:center;
        justify-content:center;
        width:160px;
        height:48px;
        color:#000000;
        text-decoration:none;
        border:1px solid black;
        cursor:pointer;
        transition:all 0.3s ease-in;
    }

    & a:hover{
        background-color:#000000;
        color:#ffffff;  
    }  
`
export const Earphone=styled.div`
        margin: 0 170px 50px 170px;
        display:flex;
        gap:20px;

    & img{
         width:540px;
         border-radius:8px;
        }
`
export const Box=styled.div`
    background-color:#F1F1F1;
    width:540px;
    border-radius:8px;
    display:flex;
    flex-direction:column;
    gap:30px;
    align-items:right;
    justify-content:center;
    padding-left:80px;

    & h3{
        font-size:28px;
        color:#000000;
    }

    & a{
        display:block;
        display:flex;
        align-items:center;
        justify-content:center;
        width:160px;
        height:48px;
        color:#000000;
        text-decoration:none;
        border:1px solid black;
        cursor:pointer;
        transition:all 0.3s ease-in;
    }

    & a:hover{
        background-color:#000000;
        color:#ffffff;  
    } 
`
export const Audio=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:120px;
    margin:0 170px 100px 170px;

    & img{
        border-radius:8px;
        width:500px;
    }
    & div{
        width:445px;
    }
    & div h1{
        font-size:38px;
        color:#000000;
        text-transform:uppercase;
        margin-bottom:30px;
    }
    & div h1 span{
        color:#D87D4A
    }
    & div p{
        font-size:16px;
        color: #918b8b;
        line-height:1.7;
    }
`
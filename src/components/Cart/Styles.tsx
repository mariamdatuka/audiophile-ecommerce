import styled from 'styled-components';

export const ModalOverlay=styled.div`
    background-color:rgba(0,0,0,0.5);
    position:fixed;
    width:100%;
    height:100vh;
    top:0;
    right:0;
    bottom:0;
    left:0;
    z-index:10;
`

export const Modal=styled.div`
    padding:20px;
    position:fixed;
    min-width:350px;
    min-height:350px;
    top:18%;
    left:70%;
    background-color:white;
    border-radius:9px;
`
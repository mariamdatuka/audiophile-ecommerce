import styled from 'styled-components'

export const Grid=styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    column-gap:20px;
    margin-bottom:150px;
`
export const GridItem=styled.div`
    display:flex;
    flex-direction:column;
    gap:30px;
    align-items:center;

    & div{
        width:350px;
        height:320px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:9px;
        background-color:#f1f1f1;
    }
    & div img{
        width:150px;
    }
    & a{
         align-self:center;
         margin-left:0;
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
      & h4{
        font-size:24px;
      }

`

  
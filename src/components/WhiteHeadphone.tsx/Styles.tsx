import styled from 'styled-components'

export const Wrapper=styled.div`
margin:0 150px;
margin-top:100px;
display:flex;
flex-direction:column;
align-items:center;
gap:50px;
`

export const ImgBox=styled.div`
width:500px;
height:420px;
border-radius:8px;
background-color:#f1f1f1;
display:flex;
align-items:center;
justify-content:center;
`

export const WrapperTwo=styled.div`
    display:flex;
    gap:120px;
  `

export const Info=styled.div`
align-self:center;
display:flex;
flex-direction:column;
gap:30px;

& h5{
font-size:12px;
color:#D87D4A;
font-weight:300;
letter-spacing:5px;
}

& h1 {
color:#000000;
font-size:38px;
text-transform:uppercase;
}

& p{
color: #353434;
font-size:14px;
line-height:1.5;
}
& h6{
font-size:18px;
font-weight:700;
}
`

export const Add=styled.button`
    width:160px;
    height:45px;
    color:#ffffff;
    background-color:#D87D4A;
    border:none;
    cursor:pointer;
    transition: all 0.3s ease-in-out;

    & :hover{
    opacity: 0.75;
   }
`
   export const WrapperThree=styled.div`
    display:flex;
    gap:20px;

    & div{
        display:flex;
        align-items:center;
        justify-content:center;
        background-color:#f1f1f1;
    }

    & div span{
        color:#000000;
        font-size:16px;
        font-weight:700;
    }
   `
   export const Decrement=styled.div`
     width:60px;
     height:45px;
     color:grey;  
     cursor:pointer;
   `
   export const Increment=styled.div`
    width:60px;
    height:45px;
    color:grey;
    cursor:pointer;
    `
    export const WrapperFour=styled.div`
    display:flex;
    gap:100px;
    margin-top:50px;
`
export const Feature=styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;

    & div{
        line-height:1.7;
        color:grey;
    }
`
export const InfoBox=styled.div`
    display:flex;
    flex-direction:column;
    gap:30px;

    & h3{
        font-size:28px;
    }
`
export const Items=styled.div`
    display:flex;
    gap:30px;
    margin-bottom:20px;

    & span{
    color:#D87D4A;
    }
    & p{
        color:grey;
    }
`
export const Gallery=styled.div`
    display:flex;
    gap:20px;
    margin:80px 0;

    & img{
        border-radius:9px;
    }
    & div{
        display:flex;
        flex-direction:column;
        gap:20px;
    }
   
`
export const Img=styled.img`
    height:580px;
    width:600px;
`

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
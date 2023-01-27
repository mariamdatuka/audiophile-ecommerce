import styled from "styled-components"

export const Audio=styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:120px;
margin-bottom:100px;

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
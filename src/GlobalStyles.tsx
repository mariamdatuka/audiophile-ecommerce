import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Manrope&display=swap');
 *{
    margin:0;
    padding:0;
    box-sizing:border-box;
 }

 body{
   font-family:'Manrope', sans-serif;
   font-size:14px;
 }
`

export default GlobalStyle;
import React from 'react'
import { SocialIcons, Wrapper,  Container, NavItems, Box, Info } from './Styles'
import logo from  '../../../assets/shared/desktop/logo.svg';
import facebook from '../../../assets/shared/desktop/icon-facebook.svg';
import instagram from '../../../assets/shared/desktop/icon-instagram.svg';
import twitter from '../../../assets/shared/desktop/icon-twitter.svg';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <Wrapper>
     <Container>
      <img src={logo} alt='logo'/>
      <NavItems>
        <Link to='/'>HOME</Link>
        <Link to='/headphones'>HEADPHONES</Link>
        <Link to='/speakers'>SPEAKERS</Link>
        <Link to='/earphones'>EARPHONES</Link>
      </NavItems>
    </Container>
    <Box>
      <Info>
        <div>
     Audiophile is an all in one stop to fulfill your audio needs. We're a small team <br/> of music lovers and sound specialists who are devoted to helping you get the <br/> most out of personal audio. Come and visit our demo facility - we're open 7 <br/>days a week.
        </div>
        <span>Copyright 2021. All Rights Reserved</span>
     </Info>
      <SocialIcons>
         <img src={facebook} alt='fb'/>
         <img src={twitter} alt='twitter'/>
         <img src={instagram} alt='insta'/>
      </SocialIcons>
    </Box>
  </Wrapper>
 
</>
  )
}

export default Footer
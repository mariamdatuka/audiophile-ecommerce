import React from 'react'
import logo from  '../../assets/shared/desktop/logo.svg';
import cart from '../../assets/shared/desktop/icon-cart.svg'
import { Container, NavItems } from './Styles';

const Navbar = () => {
  return (
    <>
    <Container>
     <img src={logo} alt='logo'/>
     <NavItems>
      <li>HOME</li>
      <li>HEADPHONES</li>
      <li>SPEAKERS</li>
      <li>EARPHONES</li>
     </NavItems>
     <img src={cart} alt='cart'/>
    </Container>
  
    </>
  )
}

export default Navbar
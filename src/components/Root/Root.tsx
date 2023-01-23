import React from 'react'
import logo from  '../../assets/shared/desktop/logo.svg';
import cart from '../../assets/shared/desktop/icon-cart.svg'
import { Container, NavItems } from './Styles';
import {Outlet} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Footer from './Footer/Footer';

const Root = () => {
  return (
    <>
    <Container>
     <img src={logo} alt='logo'/>
     <NavItems>
      <Link to='/'>HOME</Link>
      <Link to='/headphones'>HEADPHONES</Link>
      <Link to='/speakers'>SPEAKERS</Link>
      <Link to='/earphones'>EARPHONES</Link>
     </NavItems>
     <img src={cart} alt='cart'/>
    </Container>
    <div>
      <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Root
import React,{useState} from 'react'
import logo from  '../../assets/shared/desktop/logo.svg';
import cart from '../../assets/shared/desktop/icon-cart.svg'
import { Container, NavItems } from './Styles';
import {Outlet} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Footer from './Footer/Footer';
import Cart from '../Cart/Cart';

const Root = () => {
  const [isOpen, setIsOpen]=useState<boolean>(false);
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
     <img onClick={()=>setIsOpen(!isOpen)}src={cart} alt='cart'/>
    </Container>
    <div>
      <Outlet/>
    </div>
    <Footer/>
    <Cart isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}

export default Root
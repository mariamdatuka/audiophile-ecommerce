import React from 'react'
import earphone1 from '../../assets/im6.png';
import {Container,Wrapper, ImgBox, WrapperTwo, Info} from './Styles';
import {Link} from 'react-router-dom';
import Additional from '../Additional/Additional'
import Audios from '../Audio/Audios';

const Earphones = () => {
  return (
    <>
      <Container>
      <h1>EARPHONES</h1>
    </Container>
    <Wrapper>
     <WrapperTwo>
      <ImgBox>
        <img src={earphone1} alt='ear'/>
      </ImgBox>
      <Info>
        <span>NEW PRODUCT</span>
        <h1>YX1 WIRELESS
           <br/>
          EARPHONES</h1>
        <p>Tailor your listening experience with bespoke dynamic drivers <br/>from the new YX1 Wireless Earphones. Enjoy incredible <br/> high-fidelity sound even in noisy environments with its active <br/>noise cancellation feature.</p>
        <Link to='/earphones/yx1'>SEE PRODUCT</Link>
      </Info>
    </WrapperTwo>
    <Additional/>
    <Audios/>
   </Wrapper>
    </>
  )
}

export default Earphones
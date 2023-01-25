import React from 'react'
import earphone1 from '../../assets/im6.png';
import man from '../../assets/shared/desktop/image-best-gear.jpg';
import {Container,Wrapper, ImgBox, WrapperTwo, Info, Audio} from './Styles';
import {Link} from 'react-router-dom';
import Additional from '../Additional/Additional'

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
        <Link to='/'>SEE PRODUCT</Link>
      </Info>
    </WrapperTwo>
    <Additional/>
    <Audio>
      <div>
        <h1>Bringing you the <br/> <span>best</span> audio gear</h1>
        <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>
      <img src={man} alt='man'/>
    </Audio>
   </Wrapper>
    </>
  )
}

export default Earphones
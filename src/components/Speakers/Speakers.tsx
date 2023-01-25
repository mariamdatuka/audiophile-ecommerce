import React from 'react'
import head from '../../assets/im5.png';
import head1 from '../../assets/im4.png';
import man from '../../assets/shared/desktop/image-best-gear.jpg';
import {Container,Wrapper, ImgBox, WrapperTwo, Info, Audio} from './Styles';
import {Link} from 'react-router-dom';
import Additional from '../Additional/Additional';

const Speakers = () => {
  return (
    <>
      <Container>
      <h1>SPEAKERS</h1>
    </Container>
    <Wrapper>
     <WrapperTwo>
      <ImgBox>
        <img src={head1} alt='ear'/>
      </ImgBox>
      <Info>
        <span>NEW PRODUCT</span>
        <h1>ZX9 <br/>
          SPEAKER</h1>
        <p>Upgrade your sound system with the all new ZX9 active <br/> speaker. It's a bookshelf speaker system that offers truly <br/> wireless connectivity -- creating new possibilities for more <br/> pleasing and practical audio setups.</p>
        <Link to='/'>SEE PRODUCT</Link>
      </Info>
    </WrapperTwo>
    <WrapperTwo>
      <Info>
        <h1>ZX7<br/>
           SPEAKER</h1>
        <p>Stream high quality sound wirelessly with minimal loss. The ZX7 <br/> bookshelf speaker uses high-end audiophile components that <br/> represents the top of the line powered speakers for home or <br/>studio use.</p>
        <Link to='/'>SEE PRODUCT</Link>
      </Info>
      <ImgBox>
        <img src={head} alt='ear'/>
      </ImgBox>
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

export default Speakers
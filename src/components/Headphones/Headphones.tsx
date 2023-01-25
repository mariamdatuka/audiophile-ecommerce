import React from 'react'
import { Container,Wrapper,WrapperTwo, ImgBox, Info,Audio } from './Styles'
import ear from '../../assets/im.png';
import ear1 from '../../assets/im2.png';
import ear2 from '../../assets/im3.png';
import man from '../../assets/shared/desktop/image-best-gear.jpg';
import {Link} from 'react-router-dom';
import Additional from '../Additional/Additional';

const Headphones = () => {



  return (
    <>
    <Container>
      <h1>HEADPHONES</h1>
    </Container>
    <Wrapper>
     <WrapperTwo>
      <ImgBox>
        <img src={ear} alt='ear'/>
      </ImgBox>
      <Info>
        <span>NEW PRODUCT</span>
        <h1>XX99 Mark II <br/>
           Headphones</h1>
        <p>The new XX99 Mark II headphones is the pinnacle of pristine <br/> audio. It redefines your premium headphone experience by <br/>reproducing the balanced depth and precision of studio-quality <br/> sound.</p>
        <Link to='/'>SEE PRODUCT</Link>
      </Info>
    </WrapperTwo>
    <WrapperTwo>
      <Info>
        <h1>XX99 Mark II <br/>
           Headphones</h1>
        <p>The new XX99 Mark II headphones is the pinnacle of pristine <br/> audio. It redefines your premium headphone experience by <br/>reproducing the balanced depth and precision of studio-quality <br/> sound.</p>
        <Link to='/'>SEE PRODUCT</Link>
      </Info>
      <ImgBox>
        <img src={ear1} alt='ear'/>
      </ImgBox>
    </WrapperTwo>
    <WrapperTwo>
      <ImgBox>
        <img src={ear2} alt='ear'/>
      </ImgBox>
      <Info>
        <span>NEW PRODUCT</span>
        <h1>XX99 Mark II <br/>
           Headphones</h1>
        <p>Enjoy your audio almost anywhere and customize it to your <br/> specific tastes with the XX59 headphones. The stylish yet <br/>durable versatile wireless headset is a brilliant companion at <br/>home or on the move.</p>
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

export default Headphones
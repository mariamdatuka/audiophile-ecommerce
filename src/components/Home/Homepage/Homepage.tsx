import React from 'react'
import speaker from '../../../assets/home/desktop/image-sp.png';
import earphone from '../../../assets/home/desktop/image-earphones-yx1.jpg';
import circles from '../../../assets/home/desktop/pattern-circles.svg';
import man from '../../../assets/shared/desktop/image-best-gear.jpg'
import { Wrapper, Circles, Info, Speaker, Earphone,Box, Audio } from './Styles';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <>
    <Wrapper>
      <img src={speaker} alt='speaker'/>
      <Circles>
       <img src={circles} alt='circles'/>
      </Circles>
      <Info>
        <h1>ZX9 <br/> SPEAKER</h1>
        <p>Upgrade to premium speakers that are <br/>phenomenally built to deliver truly remarkable <br/> sound.</p>
        <Link to='/'>SEE PRODUCT</Link>
      </Info>
    </Wrapper>
    <Speaker>
      <h2>ZX7 SPEAKER</h2>
      <Link to='/'>SEE PRODUCT</Link>
    </Speaker>
    <Earphone>
       <img src={earphone} alt='earphone'/>
       <Box>
          <h3>YX1 EARPHONES</h3>
          <Link to='/'>SEE PRODUCT</Link>
       </Box>
    </Earphone>
    <Audio>
      <div>
        <h1>Bringing you the <br/> <span>best</span> audio gear</h1>
        <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>
      <img src={man} alt='man'/>
    </Audio>

    </>
  )
}

export default Homepage
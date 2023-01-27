import React from 'react'
import head from '../../assets/im5.png';
import head1 from '../../assets/im4.png';
import {Container,Wrapper, ImgBox, WrapperTwo, Info} from './Styles';
import {Link} from 'react-router-dom';
import Additional from '../Additional/Additional';
import Audios from '../Audio/Audios';

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
    <Audios/>
   </Wrapper>
    </>
  )
}

export default Speakers
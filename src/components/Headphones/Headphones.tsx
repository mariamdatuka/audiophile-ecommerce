import React from 'react'
import { Container,Wrapper,WrapperTwo, ImgBox, Info} from './Styles'
import ear from '../../assets/im.png';
import ear1 from '../../assets/im2.png';
import ear2 from '../../assets/im3.png';
import Audios from '../Audio/Audios';
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
           HEADPHONES</h1>
        <p>The new XX99 Mark II headphones is the pinnacle of pristine <br/> audio. It redefines your premium headphone experience by <br/>reproducing the balanced depth and precision of studio-quality <br/> sound.</p>
        <Link to='/headphones/features'>SEE PRODUCT</Link>
      </Info>
    </WrapperTwo>
    <WrapperTwo>
      <Info>
        <h1>XX99 Mark I <br/>
           HEADPHONES</h1>
        <p>The new XX99 Mark II headphones is the pinnacle of pristine <br/> audio. It redefines your premium headphone experience by <br/>reproducing the balanced depth and precision of studio-quality <br/> sound.</p>
        <Link to='/headphones/markone'>SEE PRODUCT</Link>
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
        <h1>XX59<br/>
           HEADPHONES</h1>
        <p>Enjoy your audio almost anywhere and customize it to your <br/> specific tastes with the XX59 headphones. The stylish yet <br/>durable versatile wireless headset is a brilliant companion at <br/>home or on the move.</p>
        <Link to='/XX59headphone'>SEE PRODUCT</Link>
      </Info>
    </WrapperTwo>
    <Additional/>
   <Audios/>
   </Wrapper>
    </>
  )
}

export default Headphones
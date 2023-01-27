import React from 'react'
import circles from '../../assets/shared/desktop/image.png';
import earphone from '../../assets/shared/desktop/image1.png';
import speaker from '../../assets/shared/desktop/image2.png';
import arrow from '../../assets/shared/desktop/icon-arrow-right.svg';
import { Container, Wrapper, Shop } from './Styles';

const Additional = () => {
  return (
    <>
    <Wrapper>
    <Container>
        <img src={speaker} alt='shadow'/>
        <h4>HEADPHONES</h4>
        <Shop to='/headphones/markone'>
            <p>SHOP</p>
              <img src={arrow} alt='arrow'/>
           </Shop>
    </Container>
    <Container>
        <img src={earphone} alt='shadow'/>
        <h4>SPEAKERS</h4>
        <Shop to='/speakers/zx9'>
            <p>SHOP</p>
              <img src={arrow} alt='arrow'/>
           </Shop>
    </Container>
    <Container>
        <img src={circles} alt='shadow'/>
        <h4>EARPHONES</h4>
        <Shop to='earphones/features'>
            <p>SHOP</p>
              <img src={arrow} alt='arrow'/>
           </Shop>
    </Container>
    </Wrapper>
    </>
  )
}

export default Additional
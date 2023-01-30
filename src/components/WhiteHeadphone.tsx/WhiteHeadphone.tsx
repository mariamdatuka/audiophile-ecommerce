import React from 'react'
import {Wrapper, ImgBox, WrapperTwo, Info, WrapperThree, Decrement, Increment, Add, Feature, Items,
WrapperFour,InfoBox, Img, Gallery, GridItem, Grid} from './Styles'
import Additional from '../Additional/Additional';
import Audios from '../Audio/Audios';
import Data from '../../data.json'
import ph1 from '../../assets/1.png'
import ph2 from '../../assets/2.png'
import ph3 from '../../assets/3.png'
import im1 from '../../assets/im.png';
import im5 from '../../assets/im2.png';
import im4 from '../../assets/im3.png';
import im3 from '../../assets/im4.png';
import {Link} from 'react-router-dom';

const WhiteHeadphone = () => {

    const info=(Data[1]);

  return (
    <>
       <Wrapper>
      <WrapperTwo>
        <ImgBox>
          <img src={im4} alt='img'/>
       </ImgBox>
      <Info>
          <h1>XX59 <br/>
           Headphones</h1>
          <p>The new XX99 Mark II headphones is the pinnacle of pristine <br/> audio. It redefines your premium headphone experience by <br/>reproducing the balanced depth and precision of studio-quality <br/> sound.</p>
          <h6>$ {info.price}</h6>
          <WrapperThree>
            <div>
             <Decrement>-</Decrement>
             <span>1</span>
             <Increment>+</Increment>
            </div>
            <Add>ADD TO CART</Add>
          </WrapperThree>
         </Info>
       </WrapperTwo>
       <WrapperFour>
        <Feature>
          <h1>FEATURES</h1>
          <div>
        Featuring a genuine leather head strap and premium earcups, these headphones deliver <br/>superior comfort for those who like to enjoy endless listening. It includes intuitive controls <br/>designed for any situation. Whether you’re taking a business call or just in your own <br/> personal space, the auto on/off and pause features ensure that you’ll never miss a beat.
        <br/>        
        <br/>
        The advanced Active Noise Cancellation with built-in equalizer allow you to experience <br/> your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact <br/>with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant <br/>connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior <br/>sound, cutting-edge technology, and a modern design aesthetic.
        </div>
      </Feature>
      <InfoBox>
        <h3>IN THE BOX</h3>
        <div>
          <Items>
            <span>{info.includes[0].quantity}x</span>
            <p>{info.includes[0].item}</p>
          </Items>
          <Items>
            <span>{info.includes[1].quantity}x</span>
            <p>{info.includes[1].item}</p>
          </Items>
          <Items>
            <span>{info.includes[2].quantity}x</span>
            <p>{info.includes[2].item}</p>
          </Items>
          <Items>
            <span>{info.includes[3].quantity}x</span>
            <p>{info.includes[3].item}</p>
          </Items>
        </div>
      </InfoBox>
    </WrapperFour>
      <Gallery>
       <div>
          <img src={ph3} alt='photo1'/>
          <img src={ph2} alt='photo2'/>
       </div>
      <Img src={ph1} alt='photo3'/>
    </Gallery>
    <h1>YOU MAY ALSO LIKE</h1>
    <Grid>
      <GridItem>
         <div>
           <img src={im1} alt='im1'/>
         </div>
         <h4>XX99 MARK II</h4>
         <Link to='/'>SEE PRODUCT</Link>
      </GridItem>
      <GridItem>
         <div>
           <img src={im5} alt='im1'/>
         </div>
         <h4>XX99 MARK I</h4>
         <Link to='/'>SEE PRODUCT</Link>
      </GridItem>
      <GridItem>
         <div>
           <img src={im3} alt='im1'/>
         </div>
         <h4>ZX9 SPEAKER</h4>
         <Link to='/'>SEE PRODUCT</Link>
      </GridItem>   
    </Grid>
    <Additional/>
    <Audios/>
     </Wrapper>
    </>
  )
}

export default WhiteHeadphone
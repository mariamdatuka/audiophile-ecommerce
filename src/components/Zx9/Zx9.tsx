import React from 'react'
import {Wrapper, ImgBox, WrapperTwo, Info, WrapperThree, Decrement, Increment, Add, Feature, Items,
  WrapperFour,InfoBox, Img, Gallery, GridItem, Grid} from './Styles'
  import Additional from '../Additional/Additional';
  import Audios from '../Audio/Audios';
  import Data from '../../data.json'
  import ph1 from '../../assets/speaker3.png'
  import ph2 from '../../assets/speaker2.png'
  import ph3 from '../../assets/speaker1.png'
  import im1 from '../../assets/im.png';
  import im5 from '../../assets/im2.png';
  import im4 from '../../assets/im5.png';
  import im3 from '../../assets/im4.png';
  import {Link} from 'react-router-dom';

const Zx9 = () => {
  const info=(Data[5]);

  return (
    <>
    <Wrapper>
      <WrapperTwo>
        <ImgBox>
          <img src={im3} alt='img'/>
       </ImgBox>
      <Info>
          <h1>ZX9 <br/>
           SPEAKER</h1>
          <p>Upgrade your sound system with the all new ZX9 active <br/> speaker. It’s a bookshelf speaker system that offers truly <br/> wireless connectivity -- creating new possibilities for more <br/>pleasing and practical audio setups.</p>
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
           <img src={im4} alt='im1'/>
         </div>
         <h4>ZX7 SPEAKER</h4>
         <Link to='/'>SEE PRODUCT</Link>
      </GridItem>   
    </Grid>
    <Additional/>
    <Audios/>
</Wrapper>
    </>
  )
}

export default Zx9;
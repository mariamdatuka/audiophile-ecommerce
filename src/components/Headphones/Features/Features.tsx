import React, {useState} from 'react'
import {Wrapper,WrapperTwo, ImgBox, Info,Audio, Add, WrapperThree, Decrement, Increment,
  WrapperFour, Feature,InfoBox, Items, Gallery, Img} from './Styles';
import data from '../../../data.json';
import gal1 from '../../../assets/Bitmap.png';
import gal2 from '../../../assets/Bitmap1.png';
import gal3 from '../../../assets/Bitmap2.png';
import ear from '../../../assets/im.png';
import man from '../../../assets/shared/desktop/image-best-gear.jpg';
import More from '../../More/More';
import Additional from '../../Additional/Additional';
import { useSelector, useDispatch } from 'react-redux';
import { Types } from '../../../Slices/CartSlice';
import { cartActions } from '../../../Slices/CartSlice';


const Features = () => {
  const [quantity, setQuantity]=useState<number>(0);
  const[error,setError]=useState<boolean>(false);


const dispatch=useDispatch();

const addCart=()=>{
  dispatch(cartActions.addToCart(quantity))
}

  const increment=()=>{
    if(quantity>=5){
      setError(true);
      return;
    } else{
      setQuantity((count)=>count+1);
    }
  }

  const decrement=()=>{
    if(quantity>0){
      setQuantity((count)=>count-1);
      setError(false);
    }else if (quantity===0)
    return;
  }

  const info=(data[3]);
  const quan=quantity*(info.price);
  console.log(quan);

  return (
    <>
     <Wrapper>
       <WrapperTwo>
         <ImgBox>
          <img src={ear} alt='ear'/>
         </ImgBox>
         <Info>
          <h5>NEW PRODUCT</h5>
          <h1>XX99 Mark II <br/>
           Headphones</h1>
          <p>The new XX99 Mark II headphones is the pinnacle of pristine <br/> audio. It redefines your premium headphone experience by <br/>reproducing the balanced depth and precision of studio-quality <br/> sound.</p>
          <h6>$ {info.price}</h6>
          <WrapperThree>
            <div>
             <Decrement onClick={decrement}>-</Decrement>
             <span>{quantity}</span>
             <Increment onClick={increment}>+</Increment>
            </div>
            <Add onClick={addCart}>ADD TO CART</Add>
          </WrapperThree>
          {error&&<span style={{color:'red'}}>can not order more than 5</span>}
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
          <img src={gal2} alt='photo1'/>
          <img src={gal3} alt='photo2'/>
       </div>
      <Img src={gal1} alt='photo3'/>
    </Gallery>
    <More/>
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

export default Features
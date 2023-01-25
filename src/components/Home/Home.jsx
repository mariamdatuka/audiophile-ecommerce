import React from 'react'
import { Wrapper, Main } from './Styles'
import homeimg from '../../assets/im78.png'
import Additional from '../Additional/Additional'
import Homepage from './Homepage/Homepage'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <>
<Main>
  <Wrapper>
   <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
     <span>NEW PRODUCT</span>
     <h1>XX99 Mark II <br/>
   Headphones</h1>
    <p>Experience natural, lifelike audio and exceptional <br/>
   build quality made for the passionate music  <br/>
   enthusiast.</p>
    <Link to='headphones/features'>SEE PRODUCT</Link>
   </div>
  <img src={homeimg} alt='homeimg'/>
 </Wrapper>
</Main>
<Additional/>
<Homepage/>
 </>
  )
}

export default Home
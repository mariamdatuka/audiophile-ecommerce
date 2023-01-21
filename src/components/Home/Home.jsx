import React from 'react'
import { Wrapper, Main } from './Styles'
import homeimg from '../../assets/home/mobile/image-header.jpg'



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
   <button>SEE PRODUCT</button>
   </div>
   <img src={homeimg} alt='homeimg'/>
 </Wrapper>
</Main>
 </>
  )
}

export default Home
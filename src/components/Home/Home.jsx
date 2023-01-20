import React from 'react'
import { Wrapper, Main } from './Styles'
import homeimg from '../../assets/home/desktop/image-hero.jpg'



const Home = () => {
  return (
    <>
<Main>
<Wrapper>
   <div className='abc'>
    <span>NEW PRODUCT</span>
    <h1>XX99 Mark II
   Headphones</h1>
   <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
   <button>SEE PRODUCT</button>
   </div>
   <img src={homeimg} alt='homeimg'/>
 </Wrapper>
</Main>
 </>
  )
}

export default Home
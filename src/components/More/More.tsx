import React from 'react'
import {Grid, GridItem} from './Styles'
import im1 from '../../assets/im2.png';
import im2 from '../../assets/im3.png';
import im3 from '../../assets/im4.png';
import {Link} from 'react-router-dom';


const More = () => {

  return (
    <>
    <h1>YOU MAY ALSO LIKE</h1>
    <Grid>
      <GridItem>
         <div>
           <img src={im1} alt='im1'/>
         </div>
         <h4>XX99 MARK I</h4>
         <Link to='/'>SEE PRODUCT</Link>
      </GridItem>
      <GridItem>
         <div>
           <img src={im2} alt='im1'/>
         </div>
         <h4>XX59</h4>
         <Link to='/xx59headphone'>SEE PRODUCT</Link>
      </GridItem>
      <GridItem>
         <div>
           <img src={im3} alt='im1'/>
         </div>
         <h4>ZX9 SPEAKER</h4>
         <Link to='/'>SEE PRODUCT</Link>
      </GridItem>   
    </Grid>
     
    </>
  )
}

export default More
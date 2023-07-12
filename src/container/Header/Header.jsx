import React from 'react';

import  { SubHeading } from '../../components';
import  images from '../../constants/images';
import './Header.css';



const Header = () => {
    return ( 
        <>
         <div className='app__header app__wrapper section__padding'>
            <div className='app__wrapper_info'>
                <SubHeading title='Chase the New value'/>
                <h1 className='app__header-h1'>The Key to Find Dining</h1>
                <p className='p__opensans' style={{ margin: "2rem 0"}}>
                    Man, it feels really good to learn a tech skill. Dear God Web 3.0 is where i want to be, so help me God. AMEN!

                    I really want to be the best i can be. 
                </p>
                <button type='button' className='custom__button'>Explore More</button>
            </div>

            
            
            <div className='app__wrapper_img'>
              <img src={images.welcome} alt="header img" />
            </div>

         </div>
        </>
     );
}
 
export default Header;
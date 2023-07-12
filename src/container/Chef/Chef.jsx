import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div>
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chefs World" />
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />

          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <p className='p__opensans'>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laudantium sunt obcaecati quisquam magni, fuga, recusandae atque error dolores consequuntur magnam praesentium quo aspernatur cum vel ut expedita! Corrupti, ducimus!
        </p>
      </div>
      <div className='app__chef-sign'>
    <p className='headtext__cormorant'>Kevin Luo</p>
    <p className='p__opensans'>chef & founder</p>
    <img src={images.sign} alt="sign" />
    </div>
    
    </div>

  </div>
 </div>

  
);

export default Chef;

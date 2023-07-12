import React from 'react';

import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutUs app__bg flex__center section__padding' id='about'>
    <div className='app__aboutUs-Overlay flex__center'>
      <img src={images.G} alt="g letter" />
    </div>

    <div className='app__aboutUs-content flex__center'>
      <div className='app__aboutUs-content_about'> 
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>Does it really feels good for me to be back home? I mean in the Village</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutUs-content_knife flex__center'>
        <img src={images.knife} alt="about knife" />
      </div>

      <div className='app__aboutUs-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>Does it really feels good for me to be back home? I mean in the Village</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div> 
  </div>
);

export default AboutUs;

import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading  title="Contact" />
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Address: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, ratione! Voluptatibus rerum aliq</p>
        <p className='p__cormorant' style={{color: '#dcca87', margin: '2rem 0'}}>Opening Hours</p>
        <p className='p__opensans'>Monday - Friday: 10:00am - 10pm </p>
        <p className='p__opensans'>Saturday - Sunday: 12:00noon - 12am </p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}>Visit Us</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt="findUs" />
    </div>
  </div>
);

export default FindUs;

import React from 'react';

import { SubHeading } from '../../components';
import './Newsletter.css';

const Newsletter = () => {

  return (
    <>
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title="Newsletter" />
        <h1 className='headtext__cormorant'>subscribe to our newsletter</h1>
        <p className='p__opensans'>Never miss the latest update</p>
      </div>
      <div className='app__newsletter-input flex__center'>
        <input type="email" placeholder='enter your email' />
        <button className='custom__button'>subscribe</button>
      </div>
    </div>
    </>
  );
}

export default Newsletter;

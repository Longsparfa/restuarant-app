import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import Images from '../../constants/images';
import './Footer.css';

const Footer = () => {


  return (
  <>
   <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>
            contact us
          </h1>
          <p className='p__opensans'>W Bush 53rd St. Newyork, NY 10019, USA</p>
          <p className='p__opensans'>+1 212 344-1230</p>
          <p className='p__opensans'>+1 212 555-1230</p>
      </div>
      <div className='app__footer-links_logo'>
         <img src={Images.gericht} alt="footer-logo" />
         <p className='p__opensans'>The best way to find yourself is to lose yourself in the service of others.</p>
         <img src={Images.spoon} alt="spoon" className='spoon__img' style={{marginTop: 15}} />

         <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
         </div>
      </div>
      <div className='app__footer-links_work'>
      <   h1 className='app__footer-headtext'>
            working hours
          </h1>
          <p className='p__opensans'>Monday - Friday</p>
          <p className='p__opensans'>08:00am - 12:00am</p>
          <p className='p__opensans'>Saturday - Sunday</p>
          <p className='p__opensans'>07:00am - 11:00pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>
        2023 Gericht. All Rights reserved.
      </p>
    </div>
   </div>
  </>
  );
}

export default Footer;

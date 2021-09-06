import React from 'react';
import './footer.styles.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  return(
    <div className='footer'>
      {year} © Aidyn's E-Commerce Store(Project)
    </div>
  );
}

export default Footer;
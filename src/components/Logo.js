import React from 'react';
import '../styles/Logo.css';


const Logo = ({ barbieLogo }) => (
  <div className='barbie-logo-contenedor' >
    <img
      src={barbieLogo}
      className='barbie-logo'
      alt='Barbie Logo' />
  </div>
);
  
export default Logo;
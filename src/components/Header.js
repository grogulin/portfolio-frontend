// components/Header.js
import React from 'react';

const Header = ({ title }) => (
  <header className='d-flex align-items-center justify-content-center shadow bg-white'>
    <h1 className='title'>{title}</h1>
  </header>
);

export default Header;

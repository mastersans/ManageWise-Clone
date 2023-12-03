
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Header.css';

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header className="header">
      <div className="logo" onClick={scrollToTop}>
        <img src="/CompanyIcon.webp" alt="Logo" />
        <span className='companyname'>ManageWise</span>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <Link to="features" smooth={true} duration={500}>Features</Link>
          </li>
          <li>
            <Link to="faq" smooth={true} duration={500}>FAQ</Link>
          </li>
          <li>
            <Link to="PriceSection" smooth={true} duration={500}>Pricing</Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} duration={500}>Testimonials</Link>
          </li>
          <li>
            <button className='buytemplate'>Buy Template</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import logo from '../images/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaCocktail } from 'react-icons/fa';
const Navbar = () => {
  const toggleNav = () => {
    document
      .querySelector('.links-container')
      .classList.toggle('links-container-show');
    document
      .querySelector('.user-cocktails')
      .classList.remove('user-cocktails-show');
  };

  const toggleUserCocktails = () => {
    document
      .querySelector('.user-cocktails')
      .classList.toggle('user-cocktails-show');
    document
      .querySelector('.links-container')
      .classList.remove('links-container-show');
  };

  return (
    <nav className='navbar'>
      <div className='nav-inner'>
        <Link to='/'>
          <img src={logo} alt='' className='logo' />
        </Link>

        <div className='btn-container'>
          <button
            type='button'
            className='btn-toggle btn-navToggle'
            onClick={toggleNav}
          >
            <FaBars />
          </button>
          <button
            className='btn-toggle btn-drinkCart'
            onClick={() => {
              toggleUserCocktails();
            }}
          >
            <FaCocktail />
          </button>
        </div>
      </div>

      <div className='links-container'>
        <NavLink
          to='/'
          className={({ isActive }) => {
            return isActive ? 'nav-link active' : 'nav-link';
          }}
        >
          Home
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => {
            return isActive ? 'nav-link active' : 'nav-link';
          }}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import cart from '../../../img/cart.svg';
import searchIcon from '../../../img/search-icon.svg';
const Navbar = () => {
  // window.onload = () => {
  //   const sidebar = document.querySelector('.sidebar');
  //   const barBox = document.querySelector('.bars-box');

  //   barBox.addEventListener('click', () => {
  //     sidebar.classList.remove('hidden');
  //   });
  // };

  useEffect(() => {
    const sidebar = document.querySelector('.sidebar');
    const barBox = document.querySelector('.bars-box');
    const closeBar = document.querySelector('.close');
    const closeBarButton = document.querySelectorAll('.btn-close');

    barBox.addEventListener('click', () => {
      sidebar.classList.remove('hidden');
    });

    closeBar.addEventListener('click', () => {
      sidebar.classList.add('hidden');
    });

    closeBarButton.forEach(each => {
      each.addEventListener('click', () => {
        sidebar.classList.add('hidden');
      });
    });
  });

  return (
    <div className="navbar">
      <header className="container main-nav">
        <h1 className="logo-text">
          <Link to="/">
            BuyMore<span>.</span>
          </Link>
        </h1>
        <div className="search">
          <input type="search" placeholder="Search for anything" />
          <img src={searchIcon} alt="Search Icon" className="search-icon" />
        </div>

        <ul className="mini-nav">
          <Link to="/signup">
            {' '}
            <li>
              <p className="sign-in">Sign In</p>
            </li>
          </Link>
          <li>
            {' '}
            <p className="login">Login</p>
          </li>
          <li>
            <div className="cart">
              <img src={cart} alt="cart icon" />
            </div>
          </li>
        </ul>
      </header>
      <nav className="small-nav">
        <div className="bars-box">
          <FaBars className="bars" />
        </div>

        <div className="search">
          <input type="search" placeholder="Search for anything" />
          <img src={searchIcon} alt="Search Icon" className="search-icon" />
        </div>
        <div className="cart">
          <img src={cart} alt="cart icon" />
        </div>
      </nav>

      <nav className="sidebar hidden">
        <div className="inner-head">
          <h1 className="logo-text ">
            <Link to="/" className="btn-close">
              BuyMore<span>.</span>
            </Link>
          </h1>

          <IoMdClose className="close" />
        </div>
        <a href="#new-arrivals" className="btn-close">
          New Arrivals
        </a>
        <a href="#department" className="btn-close">
          Shop by Department
        </a>
        <a href="#best-seller" className="btn-close">
          Our Best Seller
        </a>
        <div className="sidebar-login">
          <Link to="/login" className="side-login btn-close">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

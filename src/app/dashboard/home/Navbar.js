import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import cart from '../../../img/cart.svg';
import searchIcon from '../../../img/search-icon.svg';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

// Action
import {action} from '../../../providers/store/actions/actionIndex';

const Navbar = () => {
  const navigate = useNavigate()
  const loginState = useSelector(s => s.loggedIn.isLoggedIn);
  const dispatch = useDispatch();
  const {loggedIn} = bindActionCreators(action, dispatch);

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

   useEffect(() => {
    if (localStorage.getItem('authToken') == null)  loggedIn();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    loggedIn();
    navigate('/')
  };

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
          {loginState || (<Link to="/signup">
            <li>
              <p className="sign-in">Signup</p>
            </li>
          </Link>)
          }
          {!loginState ? (
            <Link to="/login">
              <li>
                {' '}
                <p className="login">Login</p>
              </li>
            </Link>
          ) : (
            <li onClick={handleLogout}>
              <p className="login">Logout</p>
            </li>
          )}
          <Link to="/cart">
            <li>
              <div className="cart">
                <img src={cart} alt="cart icon" />
              </div>
            </li>
          </Link>
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
        {!loginState ?
          <Link to="/login" className="sidebar-login side-login btn-close">
            Login
          </Link> :
        <div className="sidebar-login side-login btn-close" onClick={handleLogout}>
          Logout
        </div>
        }
        {loginState || <Link to="/signup" className="sidebar-signup side-signup btn-close">
            Signup
          </Link>}
      </nav>
    </div>
  );
};

export default Navbar;

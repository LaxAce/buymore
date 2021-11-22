import { FaTwitter, FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer section">
      <nav className="footer-navigation">
        {/* <ul className="contact-list">
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Press</a>
          </li>
          <li>
            <a href="/">iOS App</a>
          </li>
          <li>
            <a href="/">Android App</a>
          </li>
        </ul> */}
        <ul className="social-contact">
          <li>
            <a href="/">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="/">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="/">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="/">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </nav>
      <p>
        Copyright <span className="copyright">©</span> 2021 by BuyMore | Coded &
        Designed by:
        <span className="my-name"> Abdulhafeez</span>
      </p>
    </footer>
  );
};

export default Footer;

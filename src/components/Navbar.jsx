import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 1, link: 'home', text: 'Home' },
    { id: 2, link: 'about', text: 'About' },
    { id: 3, link: 'skills', text: 'Skills' },
    { id: 4, link: 'projects', text: 'Projects' },
    { id: 5, link: 'experience', text: 'Experience' },
    { id: 6, link: 'contact', text: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <Link to="home" smooth={true} duration={500}>
            <h1>Madhav<span>.</span></h1>
          </Link>
        </div>

        <ul className="nav-links">
          {links.map(({ id, link, text }) => (
            <li key={id}>
              <Link
                to={link}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                spy={true}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hamburger" onClick={toggleNav}>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${nav ? 'active' : ''}`}>
          <ul>
            {links.map(({ id, link, text }) => (
              <li key={id}>
                <Link
                  onClick={closeNav}
                  to={link}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

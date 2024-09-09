import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBasket, FaHeart, FaHome } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import "./index.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <FaHome size={24} /> MyStore
        </Link>
      </div>
      <nav className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/basket" className="nav-link">
          <FaShoppingBasket /> Basket
        </Link>
        <Link to="/wishlist" className="nav-link">
          <FaHeart /> Wishlist
        </Link>
      </nav>
      <button className="mobile-menu-icon" onClick={handleToggle}>
        {isMobile ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="header-links">
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/resume" style={{ color: 'white', textDecoration: 'none' }}>Resume</Link>
        <Link to="/artwork" style={{ color: 'white', textDecoration: 'none' }}>Artwork</Link>
        <Link to="/design" style={{ color: 'white', textDecoration: 'none' }}>Design</Link>
      </div>
    );
}

export default Header;
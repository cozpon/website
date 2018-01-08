import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="header-links">
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <a href='https://registry.jsonresume.org/ee740269' style={{ color: 'white', textDecoration: 'none' }}>Resume</a>
        <Link to="/artwork" style={{ color: 'white', textDecoration: 'none' }}>Artwork</Link>
        <Link to="/design" style={{ color: 'white', textDecoration: 'none' }}>Design</Link>
      </div>
    );
}

export default Header;
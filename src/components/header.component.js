import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="header-links">
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/artwork">Artwork</Link>
        <Link to="/design">Design</Link>
      </div>
    );
}

export default Header;
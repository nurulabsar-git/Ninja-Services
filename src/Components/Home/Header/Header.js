import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-background-style">
         <nav style={{display: 'flex'}}>
         <Link className="link-style" to="/"><i class="fa fa-home" aria-hidden="true"></i> Home</Link>
         <Link className="link-style" to="/adminSection"> Admin</Link>
         <Link className="link-style" to="/login">LogIn</Link>
        </nav>
        </div>
    );
};

export default Header;
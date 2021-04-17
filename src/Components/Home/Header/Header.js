import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-style">
         <nav style={{display: 'flex'}}>
         <Link className="link-style" to="/"> Home</Link>
         <Link className="link-style" to="/cloth">Clothes</Link>
         <Link className="link-style" to="/food">Foods</Link>
         <Link className="link-style" to="/adminSection"> Admin</Link>
         <Link className="link-style" to="/login">LogIn</Link>
        </nav>
        </div>
    );
};

export default Header;
import React from 'react';
import { Link } from "react-router-dom";
import logo from './Logo.svg';
import '../Styles/app.css'


const Header = () => {
    return (
            <div className="header">
                <img src={logo} width="200" height="100"/>
                    <div className="header-right">
                            <Link className="item" to="/">Home</Link>
                            <Link className="item" to="/blog">Blog</Link>
                            <Link className="item" to="/about">About</Link>
                    </div>
            </div>
    )
}

export default Header;
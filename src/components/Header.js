import React from 'react';
import './css/Header.css';

const Header = () => (
    <header className="grey-text text-darken-4">
        <nav>
            <div className="nav-wrapper blue lighten-5">
                <a href="#!" className="brand-logo left grey-text text-darken-4">Logo</a>
                <ul className="right">
                    <li><a className="grey-text text-darken-4" href="/">Sass</a></li>
                    <li><a className="grey-text text-darken-4" href="/">Components</a></li>
                    <li><a className="grey-text text-darken-4" href="/">Javascript</a></li>
                    <li><a className="grey-text text-darken-4" href="/">Mobile</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Header;
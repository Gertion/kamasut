import React from 'react';
import headStyle from './Header.module.css';

const Header = () => {
    return (
        <header className={headStyle.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png"/>
        </header>
    );
};

export default Header;
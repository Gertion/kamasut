import React from 'react';
import navColor from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import FriendsBar from "./friendsBar/friendsBar";
const Navbar = (props) => {


    return (
        <nav className={navColor.nav}>
            <div className={navColor.item}>
                <NavLink to="/Profile"
                         className={navData => navData.isActive ? navColor.activeLink : navColor.item}> Profile </NavLink>
            </div>
            <div className={navColor.item}>
                <NavLink to="/Dialogs" className={navData => navData.isActive ? navColor.activeLink : navColor.item}>Messages</NavLink>
            </div>
            <div className={navColor.item}>
                <NavLink to="/Users" className={navData => navData.isActive ? navColor.activeLink : navColor.item}>Users</NavLink>
            </div>
            <div className={navColor.item}>
                <NavLink to="/News" className={navData => navData.isActive ? navColor.activeLink : navColor.item}>News</NavLink>
            </div>
            <div className={navColor.item}>
                <NavLink to="/Music" className={navData => navData.isActive ? navColor.activeLink : navColor.item}>Music</NavLink>
            </div>
            <div className={navColor.item}>
                <NavLink to="/Settings" className={navData => navData.isActive ? navColor.activeLink : navColor.item}>Settings</NavLink>
            </div>
            <div className={navColor.item}>
                <NavLink to="/Friends" className={navData => navData.isActive ? navColor.activeLink : navColor.item}>Friends</NavLink>
                <FriendsBar />
            </div>
        </nav>
    );
};

export default Navbar;
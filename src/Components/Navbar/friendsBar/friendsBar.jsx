import React from 'react';
import navColor from "../Navbar.module.css";


const FriendsBar = (props) => {
    return (
        <div className={navColor.column}>
            <div className={navColor.block}>
                <img src='https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg'/>
                <div>friendsFav</div>
            </div>
        </div>

    );
};

export default FriendsBar;
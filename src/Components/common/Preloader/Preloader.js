import React from 'react';
import loading from "../../../assets/images/Spiner.svg";

const Preloader = (props) => {
    return (
        <div style={{backgroundColor: 'White'}}>
            <img src={loading}/>
        </div>
    );
};

export default Preloader;
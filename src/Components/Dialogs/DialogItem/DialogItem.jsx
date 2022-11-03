import React from 'react';
import dialog from './../Dialogs.module.css'
import {NavLink, Route} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={dialog.dialog + '' + dialog.active}>
            <img src='https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
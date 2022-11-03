import React from 'react';
import dialog from './../Dialogs.module.css'


const Message = (props) => {
    return <div className={dialog.messages}>{props.text}</div>

}

export default Message;
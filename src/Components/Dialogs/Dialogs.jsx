import React from 'react';
import dialog from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)
    let messagesDialogs = state.messages.map(m => <Message text={m.text}/>)
    let newMessageBody = state.newMessageBody


let onSendMessageClick = () =>{
    props.sendMessage()
}
let onNewMessageChange = (e) => {
       let text = e.target.value
    props.updateNewMessageBody(text)
}

    return (
        <div className={dialog.dialogs}>
            <div className={dialog.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={dialog.messages}>
                <div>{messagesDialogs}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'>
                    </textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Кнопка</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
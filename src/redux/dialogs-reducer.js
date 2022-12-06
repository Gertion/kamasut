const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initionalState = {
    messages: [
        {id: 1, text: 'qq'},
        {id: 2, text: 'hi'},
        {id: 3, text: '1+1'},
        {id: 4, text: 'Queen'},

    ],
    dialogs: [
        {id: 1, name: 'Alexey'},
        {id: 2, name: 'Dmitry'},
        {id: 3, name: 'Max'},
        {id: 4, name: 'Igor'},
        {id: 5, name: 'Misha'},

    ],
    newMessageBody: ''
}

 const DialogsReducer = (state = initionalState, action) => {

     switch (action.type) {
         case UPDATE_NEW_MESSAGE_BODY:
              return {
                 ...state,
                  newMessageBody: action.body
             }
         case SEND_MESSAGE:
             let body = state.newMessageBody
              return  {
                 ...state,
                  newMessageBody: '',
                 messages: [...state.messages, {id: 6, text: body}],
             }
         default:
             return state
     }

};


export const  sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default DialogsReducer;
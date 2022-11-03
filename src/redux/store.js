import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import SidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello, qq', likesCount: 11},
                {id: 2, message: 'where am i', likesCount: 12},
            ],
            newPostText: 'it-web'

        },
        dialogsPage: {
            messages: [
                {id: 1, text: 'qq'},
                {id: 2, text: 'GAGAW'},
                {id: 3, text: 'GAWGWA'},
                {id: 4, text: 'BVAS'},

            ],
            dialogs: [
                {id: 1, name: 'Alexey'},
                {id: 2, name: 'Dmitry'},
                {id: 3, name: 'Max'},
                {id: 4, name: 'Yuri'},
                {id: 5, name: 'Gg'},

            ],
            newMessageBody: ''
        },
        sidebar: [{}],

    },
    callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer // это паттерн наблюдатель
    },
    dispatch(action) {//{TYPE: 'ADD-POST'}
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = SidebarReducer(this._state.sidebar, action)
            this._callSubscriber(this._state)
        }
}

export default store
window.state = store
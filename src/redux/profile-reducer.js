const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initionalState = {
    posts: [
        {id: 1, message: 'Hello, qq', likesCount: 11},
        {id: 2, message: 'where am i', likesCount: 12},
    ],
    newPostText: 'it-web'
}

 const ProfileReducer = (state = initionalState, action) => {
         switch (action.type) {
             case 'ADD-POST':
                 let newPost = {
                     id: 5,
                     message: state.newPostText,
                     likesCount: 1
                 }

                 state.posts.push(newPost)
                 state.newPostText = ''
                 break;
             case UPDATE_NEW_POST_TEXT:
                 state.newPostText = action.newText
                 break;
         }
         return state
}

export const  addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

;

export default ProfileReducer;
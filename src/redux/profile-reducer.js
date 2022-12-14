const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initionalState = {
    posts: [
        {id: 1, message: 'Hello, qq', likesCount: 11},
        {id: 2, message: 'where am i', likesCount: 12},
    ],
    newPostText: 'it-web',
    profile: null
}

 const ProfileReducer = (state = initionalState, action) => {
         switch (action.type) {
             case 'ADD-POST': {
                 let newPost = {
                     id: 5,
                     message: state.newPostText,
                     likesCount: 1,
                 }
                 return  {
                     ...state,
                     posts: [...state.posts, newPost],
                     newPostText: '',
                 }
             }
             case UPDATE_NEW_POST_TEXT: {
                 return  {
                     ...state,
                     newPostText: action.newText,
                 }
             }
             case SET_USER_PROFILE: {
                 return  {
                     ...state,
                     profile: action.profile,
                 }
             }
             default:
                 return state
         }
}

export const  addPostActionCreator = () => ({type: ADD_POST})
export const  setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

;

export default ProfileReducer;
import { getUserProfileRequest, saveProfile, getStatus, setStatus, setPhoto } from '../api/API-profile';
import { stopSubmit } from 'redux-form';

const ADD_POST = "profileReducer/ADD-POST";
const DELETE_POST = "profileReducer/DELETE-POST";
const SET_USER_PROFILE = "profileReducer/SET-USER-PROFILE";
const SET_LOADING_STATUS = "profileReducer/SET-LOADING-STATUS";
const SET_PROFILE_STATUS = "profileReducer/SET-PROFILE-STATUS";
const SET_AVATAR = "profileReducer/SET-AVATAR";
const LIKE = "profileReducer/LIKE-POST"
const DISLIKE = "profileReducer/DISLIKE-POST"


let initialState = {
    postsData: [
        { id: 1, likesCount: 232, message: "Тестовое сообщение 1", blockedId: [] },
        { id: 2, likesCount: 15, message: "Тестовое сообщение 2", blockedId: [] },
        { id: 3, likesCount: 24, message: "Тестовое сообщение 3", blockedId: [] },
        { id: 4, likesCount: 55, message: "Тестовое сообщение 4", blockedId: [] },
        { id: 5, likesCount: 125, message: "Тестовое сообщение 5", blockedId: [] }
    ],
    profile: null,
    status: "",
    isLoading: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, { id: Math.random(0) * 1000, likesCount: 0, message: action.post,blockedId: [] }]
            }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_LOADING_STATUS: {
            return {
                ...state, isLoading: action.status
            };
        }
        case LIKE: {
            return {
                ...state, postsData: [...state.postsData.map(post => {
                    if (post.id === action.id) {
                        post.likesCount++;
                        post.blockedId = [...post.blockedId, action.userId];
                    }
                    return post;
                })
                ]
            };
        }
        case DISLIKE: {
            return {
                ...state, postsData: [...state.postsData.map(post => {
                    if (post.id === action.id) {
                        post.likesCount--;
                        post.blockedId = [...post.blockedId.filter(id => id !== action.userId)];
                    }
                    return post;
                })
                ]
            };
        }
        case SET_AVATAR: {
            return {
                ...state, profile: { ...state.profile, photos: action.photos }
            };
        }
        case DELETE_POST: {
            return {
                ...state, postsData: [...state.postsData.filter(post => post.id !== action.id)]
            };
        }
        case SET_PROFILE_STATUS: {
            return {
                ...state, status: action.status
            };
        }
        default: return state;
    }
}

export let addPostActionCreater = (post) => ({ type: ADD_POST, post }); //add post
export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile }); // set profile for ProfileInfo
export let setUpdatedAvatar = (photos) => ({ type: SET_AVATAR, photos }); // new photo dispatch
export let setPreloader = (status) => ({ type: SET_LOADING_STATUS, status }); // preloader for updatings
export let setProfileStatus = (status) => ({ type: SET_PROFILE_STATUS, status }); // status
export let deletePost = (id) => ({ type: DELETE_POST, id }); // doesn`t use
export let dislikePost = (id, userId) => ({ type: DISLIKE, id, userId })
export let likePost = (id, userId) => ({ type: LIKE, id, userId })

export let updateUserProfileAvatar = (avatar) => {
    return async (dispatch) => {
        let response = await setPhoto(avatar)
        if (response.data.resultCode === 0) {
            dispatch(setUpdatedAvatar(response.data.data.photos));
        }
    }
}

export let getUserProfile = (userId) => {
    return async (dispatch) => {
        dispatch(setPreloader(true));
        let response = await getUserProfileRequest(userId);
        dispatch(setPreloader(false));
        dispatch(setUserProfile(response));
    }
}

export let saveProfileEdits = (data) => {
    return async (dispatch, getState) => {
        let id = getState().authPage.id;
        let response = await saveProfile(data);
        if (response.data.resultCode === 0) {
            let data = await getUserProfileRequest(id);
            dispatch(setUserProfile(data));
        } else {
            let objectError = {
                "contacts": {}
            }
            for (let i = 0; i < response.data.messages.length; i++) {
                let error = response.data.messages[i].replace("(Contacts->", "").replace(")", "");
                let _social = error.replace("Invalid url format ", "");
                _social = _social.toLowerCase();
                objectError = {
                    "contacts": {
                        ...objectError.contacts,
                        [_social]: error
                    }
                }
            }
            dispatch(stopSubmit("edit", objectError));
            return Promise.reject();
        }
    }
}

export let getUserProfileStatus = (userId) => {
    return async (dispatch) => {
        let response = await getStatus(userId);
        if (response.status === 200) {
            dispatch(setProfileStatus(response.data));
        }
    }
}

export let setUserProfileStatus = (status) => async (dispatch) => {
    try {
        let response = await setStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(status));
        }
    }
    catch (error) {
       // FAIL 
    }
}


export default profileReducer;
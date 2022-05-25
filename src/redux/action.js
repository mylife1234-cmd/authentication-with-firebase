import * as types from  "./actionTypes";
import { auth,googleAuthProvider,facebookAuthProvider} from "../firebase"
import { OAuthProvider ,GithubAuthProvider} from "firebase/auth";
const provider = new OAuthProvider('microsoft.com');
const githubProvider = new GithubAuthProvider();
const registerStart = ()=>({
    type: types.REGISTER_START,
});
const registerSuccess = (user)=>({
    type: types.REGISTER_SUCCESS,
    payload: user
});
const registerFail = (error)=>({
    type: types.REGISTER_FAIL,
    payload: error
});

const loginStart = ()=>({
    type: types.LOGIN_START,
});
const loginSuccess = (user)=>({
    type: types.LOGIN_SUCCESS,
    payload: user
});
const loginFail = (error)=>({
    type: types.LOGIN_FAIL,
    payload: error
});

const logoutStart = ()=>({
    type: types.LOGOUT_START,
});
const logoutSuccess = (user)=>({
    type: types.LOGOUT_SUCCESS,
    payload: user
});
const logoutFail = (error)=>({
    type: types.LOGOUT_FAIL,
    payload: error
});
const googleSignInStart = ()=>({
    type: types.GOOGLE_SIGN_IN_START,
});
const googleSignInSuccess = (user)=>({
    type: types.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
});
const googleSignIntFail = (error)=>({
    type: types.GOOGLE_SIGN_IN_FAIL,
    payload: error
});
const facebookSignInStart = ()=>({
    type: types.FACEBOOK_SIGN_IN_START,
});
const facebookSignInSuccess = (user)=>({
    type: types.FACEBOOK_SIGN_IN_SUCCESS,
    payload: user
});
const facebookSignIntFail = (error)=>({
    type: types.FACEBOOK_SIGN_IN_FAIL,
    payload: error
});
const microsoftSignInStart = ()=>({
    type: types.MICROSOFT_SIGN_IN_START,
});
const microsoftSignInSuccess = (user)=>({
    type: types.MICROSOFT_SIGN_IN_SUCCESS,
    payload: user
});
const microsoftSignIntFail = (error)=>({
    type: types.MICROSOFT_SIGN_IN_FAIL,
    payload: error
});
const githubSignInStart = ()=>({
    type: types.GITHUB_SIGN_IN_START,
});
const githubSignInSuccess = (user)=>({
    type: types.GITHUB_SIGN_IN_SUCCESS,
    payload: user
});
const githubSignIntFail = (error)=>({
    type: types.GITHUB_SIGN_IN_FAIL,
    payload: error
});
export const setUser = (user) =>({
    type: types.SET_USER,
    payload:user
})
export const registerInitiate = (email, password, displayName) =>{
    return function(dispatch){
        dispatch(registerStart());
        auth.createUserWithEmailAndPassword(email,password).then(({user}) =>{
                user.updateProfile({
                    displayName,
                });
                dispatch(registerSuccess(user));
    }).catch((error) => dispatch(registerFail(error.message)))
    }
}
export const loginInitiate = (email, password) =>{
    return function(dispatch){
        dispatch(loginStart());
        auth.signInWithEmailAndPassword(email,password).then(({user}) =>{
            dispatch( loginSuccess(user));         
    }).catch((error) => dispatch(loginFail(error.message)))
    }
}
export const logoutInitiate = () =>{
    return function(dispatch){
        dispatch(logoutStart());
        auth.signOut().then((resp) =>{
            dispatch( logoutSuccess());         
    }).catch((error) => dispatch(logoutFail(error.message)))
    }
}

export const googleSignInInitiate = () =>{
    return function(dispatch){
        dispatch(googleSignInStart());
        auth.signInWithPopup(googleAuthProvider).then(({user}) =>{
            dispatch( googleSignInSuccess(user));         
    }).catch((error) => dispatch(googleSignIntFail(error.message)))
    }
}

export const facebookSignInInitiate = () =>{
    return function(dispatch){
        dispatch(facebookSignInStart());
        auth.signInWithPopup(facebookAuthProvider.addScope("user_birthday")).then(({user}) =>{
            dispatch( facebookSignInSuccess(user));         
    }).catch((error) => dispatch(facebookSignIntFail(error.message)))
    }
}
export const microsoftSignInInitiate = () =>{
    return function(dispatch){
        dispatch(microsoftSignInStart());
        auth.signInWithPopup(provider.addScope('mail.read')).then(({user}) =>{
            dispatch( microsoftSignInSuccess(user));         
    }).catch((error) => dispatch(microsoftSignIntFail(error.message)))
    }
}
export const githubSignInInitiate = () =>{
    return function(dispatch){
        dispatch(githubSignInStart());
        auth.signInWithPopup(githubProvider.addScope('repo')).then(({user}) =>{
            dispatch( githubSignInSuccess(user));         
    }).catch((error) => dispatch(githubSignIntFail(error.message)))
    }
}

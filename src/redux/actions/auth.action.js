import firebase from 'firebase/app'
import auth from '../../firebase'
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionType'


export const login =() => async dispatch => {
    try{

        dispatch({
            type : LOGIN_REQUEST,
        })

        const provider = new firebase.auth.GoogleAuthProvider()
        const res = await auth.signInWithPopup(provider)
        console.log(res, "user")

        const accessToken = res.credential.accessToken
        console.log(accessToken, "from actions")

        const profile = {
            name : res.additionalUserInfo.profile.name, 
            photo_URL : res.additionalUserInfo.profile.picture
        }

        dispatch({
            type : LOGIN_SUCCESS,
            Payload : accessToken
        })

        dispatch({
            type : LOAD_PROFILE, 
            payload : profile
        })
    } catch(error){
        dispatch({
            type : LOGIN_FAIL, 
            payload : error.message
        })
    }
}
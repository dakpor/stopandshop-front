import React, {
    useReducer
} from 'react'
import AuthContext from './authContext'
import authReducer from './authReducer'
import axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS,
    LOGOUT
} from '../types'

const AuthState = (props) => {

    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    }

    const [state, dispatch] = useReducer(initialState)

    // Register User
    const registerUser = (formdata) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        try {
            const response = await axios.post('/user')
        } catch (error) {

        }
    }
    // Login User
    // Load User
    // Logout User
    // Clear Error

    return ( < AuthContext.Provider value = {
            {

            }
        } >

        {
            props.children
        } < /AuthContext.Provider>
    )
}

export default AuthState
import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	CLEAR_ERRORS,
	LOGOUT
} from "../types";

const AuthState = props => {
	const initialState = {
		token: localStorage.getItem("token"),
		isAuthenticated: null,
		loading: true,
		user: null,
		error: null
	};

	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};
	const [state, dispatch] = useReducer(authReducer, initialState);

	// Register User
	const register = async formdata => {
		try {
			const response = await axios.post("/users/register", formdata, config);
			dispatch({
				type: REGISTER_SUCCESS,
				payload: response.data
			});
			loadUser();
		} catch (error) {
			dispatch({
				type: REGISTER_FAIL,
				payload: error.response.data.msg
			});
		}
	};
	// Login User
	const login = async formdata => {
		try {
			const response = await axios.post("/users/login", formdata, config);

			dispatch({
				type: LOGIN_SUCCESS,
				payload: response.data
			});
			loadUser();
		} catch (error) {
			dispatch({
				type: LOGIN_FAIL,
				payload: error.response.data.msg
			});
		}
	};
	// Load User
	const loadUser = async () => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}
		try {
			const response = await axios.get("/users/me");
			dispatch({
				type: USER_LOADED,
				payload: response.data
			});
		} catch (error) {
			dispatch({
				type: AUTH_ERROR,
				payload: error.response.data.msg
			});
		}
	};
	// Logout User

	const logout = () => {
		dispatch({
			type: LOGOUT
		});
	};
	// Clear Error
	const clearError = () => {
		dispatch({ type: CLEAR_ERRORS });
	};
	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				loading: state.loading,
				isAuthenticated: state.isAuthenticated,
				user: state.user,
				error: state.error,
				register,
				login,
				loadUser,
				logout,
				clearError
			}}>
			{props.children}{" "}
		</AuthContext.Provider>
	);
};

export default AuthState;

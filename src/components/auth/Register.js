import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";
const Register = props => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		password2: ""
	});
	const { name, email, password, password2 } = user;

	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;
	const authContext = useContext(AuthContext);
	const { isAuthenticated, register, error, clearError } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push("/");
		}
		if (error) {
			setAlert(error, "danger", 3000);
			clearError();
		}
	}, [error, isAuthenticated, props.history]);

	const handleChange = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (name === "" || email === "" || password === "" || password2 === "") {
			setAlert("All fields are required!", "danger", 3000);
		} else if (password !== password2) {
			setAlert(
				"Password do not match. Please enter correct password",
				"danger",
				3000
			);
		} else {
			register({ name, email, password });
		}
	};
	return (
		<div className='form-container'>
			<h1 className='text-primary'>Register Account</h1>

			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' value={name} onChange={handleChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input type='email' name='email' value={email} onChange={handleChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						minLength='6'
						value={password}
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='password2'>Confirm Password</label>
					<input
						type='password'
						name='password2'
						minLength='6'
						value={password2}
						onChange={handleChange}
					/>
				</div>
				<input
					type='submit'
					value='Register'
					className='btn btn-primary btn-block'
				/>
			</form>
		</div>
	);
};

export default Register;

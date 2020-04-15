import React, { useContext, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

const Login = (props) => {
	const [user, setUser] = useState({ email: "", password: "" });
	const { email, password } = user;

	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;

	const authcontext = useContext(AuthContext);
	const { login, isAuthenticated, error, clearError } = authcontext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push("/");
		}
		if (error) {
			setAlert(error, "danger", 3000);
			clearError();
		}
	}, [isAuthenticated, props.history]);

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email === "" || password === "") {
			setAlert("Email and Password Required!", "danger", 3000);
		}

		login({ email, password });
	};
	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId='formBasicEmail'>
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
					placeholder='Enter email'
				/>
			</Form.Group>

			<Form.Group controlId='formBasicPassword'>
				<Form.Label>Password</Form.Label>
				<Form.Control
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					placeholder='Password'
				/>
			</Form.Group>
			<Button variant='primary' type='submit'>
				Submit
			</Button>
		</Form>
	);
};

export default Login;

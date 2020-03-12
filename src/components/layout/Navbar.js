import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AuthContext from "../../context/auth/authContext";

const Navbar = ({ title, icon }) => {
	const authContext = useContext(AuthContext);
	const { isAuthenticated, logout, login, user } = authContext;

	// @TODO Bring ProductContext
	const guestLinks = (
		<Fragment>
			<li>
				<Link to='/products'>Products</Link>
			</li>
			<li>
				<Link to='/register'>Register</Link>
			</li>
			<li>
				<Link to='/login'>Login</Link>
			</li>
		</Fragment>
	);

	const handleClick = () => {
		logout();
		//
		// clearProductss()
	};

	const authLinks = (
		<Fragment>
			<li>
				<Link to='/Products'>Products</Link>
			</li>
			<li> Hello {user && user.name.toUpperCase()} </li>
			<li>
				<a href='#!' onClick={handleClick}>
					{" "}
					<i className='fas fa-sign-out'></i> <span className='hide-sm'>Logout</span>{" "}
				</a>
			</li>
		</Fragment>
	);
	return (
		<div className='navbar bg-primary'>
			<h1>
				{" "}
				<i className={icon} /> {title}
			</h1>
			<ul> {isAuthenticated ? authLinks : guestLinks}</ul>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string
};
Navbar.defaultProps = {
	title: "STOP and SHOP",
	icon: ""
};
export default Navbar;

import React, { Fragment, useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import AuthContext from "../../context/auth/authContext";
import ProductContext from "../../context/product/productContext";
import CartContext from "../../context/cart/cartContext";

const Navigation = (props) => {
	const { title, icon } = props;
	const authContext = useContext(AuthContext);
	const { isAuthenticated, logout, login, user, isAdmin } = authContext;

	// @TODO Bring Cart Context
	const cartContext = useContext(CartContext);
	const { cart } = cartContext;
	const count = cart.length;
	// @TODO Bring ProductContext
	const productContext = useContext(ProductContext);
	const { loadProducts } = productContext;
	const guestLinks = (
		<Fragment>
			<Nav.Link>
				<Link to='/'>Products</Link>
			</Nav.Link>
			<Nav.Link>
				<Link to='/register'>Register</Link>
			</Nav.Link>
			<Nav.Link>
				<Link to='login'>Login</Link>
			</Nav.Link>
			{/* <li>
				<Link to='/login'>Login</Link>
			</li> */}
		</Fragment>
	);

	const handleSelect = () => {
		logout();
		return <Redirect to='/' />;
	};

	const authLinks = (
		<Fragment>
			<Nav.Link href='#' className='text-white'>
				Hello {user && user.name.toUpperCase()}{" "}
			</Nav.Link>
			<Nav.Link href='#' className='text-white' onSelect={handleSelect}>
				{" "}
				<i className='fas fa-sign-out'></i> <span className='hide-sm'>Logout</span>{" "}
			</Nav.Link>
		</Fragment>
	);

	const adminLink = (
		<Nav.Link href='/add' className='text-white'>
			Add Product
		</Nav.Link>
	);
	return (
		<Navbar bg='primary'>
			<Navbar.Brand href='/'>
				<h1 className='text-white'>
					{" "}
					<i className={icon} /> {title}
				</h1>
			</Navbar.Brand>
			<Nav className='ml-auto'>
				{" "}
				{isAuthenticated ? authLinks : guestLinks}
				{isAuthenticated && isAdmin && adminLink}
				<Nav.Link className='text-white' href='/checkout'>
					<i className='fas fa-shopping-cart fa-2x'></i>{" "}
					<span className='text-danger'>{count}</span>
				</Nav.Link>
			</Nav>
		</Navbar>
		// <div className='navbar bg-primary'>
		// 	<h1 className='navbar-brand'>
		// 		{" "}
		// 		<i className={icon} /> {title}
		// 	</h1>
		// 	<ul className='navbar-nav'>
		// 		{" "}
		// 		{isAuthenticated ? authLinks : guestLinks}
		// 		{isAuthenticated && user.isAdmin && adminLink}
		// 	</ul>
		// </div>
	);
};

Navigation.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
};
Navigation.defaultProps = {
	title: "STOP and SHOP",
	icon: "",
};
export default Navigation;

import React, { useEffect, useContext } from "react";
import Products from "../products/Products";
import ProductContext from "../../context/product/productContext";
import AuthContext from "../../context/auth/authContext";
const Home = () => {
	const productContext = useContext(ProductContext);
	const { loadProducts } = productContext;

	const authContext = useContext(AuthContext);
	const { loadUser, token, isAuthenticated } = authContext;
	useEffect(() => {
		if (token) {
			loadUser();
		}
		// eslint-disable-next-line
	}, [token]);

	useEffect(() => {
		if (!isAuthenticated) {
			loadProducts();
		}
		// eslint-disable-next-line
	}, []);
	return (
		<div className='container'>
			<div>
				<Products />
			</div>
		</div>
	);
};

export default Home;

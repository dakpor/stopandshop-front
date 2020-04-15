import React, { Fragment } from "react";
import { useContext, useEffect } from "react";
import ProductItem from "./ProductItem";
import { Spinner } from "react-bootstrap";
import ProductContext from "../../context/product/productContext";

const Products = () => {
	const productContext = useContext(ProductContext);
	const { products, loadProducts, loading } = productContext;
	console.log(products);
	useEffect(() => {
		loadProducts();
	}, []);

	if (products !== null && products.length === 0 && !loading) {
		return <h4>No Product</h4>;
	}
	return (
		<Fragment>
			{products !== null && !loading ? (
				products.map((product) => (
					<ProductItem key={product._id} product={product} />
				))
			) : (
				<div className='col-sm-4 mx-auto'>
					<Spinner animation='border' role='status'>
						<span className='sr-only'>Loading...</span>
					</Spinner>
					<h4>Loading...</h4>
				</div>
			)}
		</Fragment>
	);
};

export default Products;

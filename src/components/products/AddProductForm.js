import React, { useState, useContext, Fragment, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ProductContext from "../../context/product/productContext";
import UploadProductImage from "./UploadProductImage";
const AddProductForm = (props) => {
	const productContext = useContext(ProductContext);
	const {
		addProduct,
		updateProduct,
		deleteProduct,
		current,
		products,
	} = productContext;

	const initialState = {
		name: "",
		type: "",
		description: "",
		price: 0,
	};

	const [product, setProduct] = useState(initialState);

	const { name, type, description, price } = product;
	const handleChange = (e) => {
		setProduct({
			...product,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (current === null) {
			updateProduct(product);
		} else {
			addProduct(product);
			console.log(product);
		}
		setProduct({
			name: "",
			type: "",
			description: "",
			price: 0,
		});
	};

	useEffect(() => {
		if (products.length > 0) {
			props.history.push("/");
		}
	}, [products, props.history]);
	return (
		<div className='row'>
			<div className='col-md-6 mx-auto'>
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label>Product Name</Form.Label>
						<Form.Control
							type='text'
							name='name'
							value={name}
							required
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Product Type</Form.Label>
						<Form.Control
							type='text'
							name='type'
							value={type}
							required
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Product Description</Form.Label>
						<Form.Control
							type='text'
							as='textarea'
							rows='3'
							name='description'
							value={description}
							required
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Product Price</Form.Label>
						<Form.Control
							type='Number'
							name='price'
							value={price}
							required
							onChange={handleChange}
						/>
					</Form.Group>
					<Button variant='primary' type='submit'>
						{current ? "Update Product" : "Add Product"}
					</Button>
				</Form>
				<UploadProductImage />
			</div>
		</div>
	);
};

export default AddProductForm;

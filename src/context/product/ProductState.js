import React, { useReducer } from "react";
import axios from "axios";
import ProductContext from "./productContext";
import productReducer from "./productReducer";
import {
	ADD_PRODUCT,
	ADD_PRODUCT_IMAGE,
	CLEAR_PRODUCTS,
	DELETE_PRODUCT,
	FILTER_PRODUCT,
	GET_PRODUCTS,
	UPDATE_PRODUCT,
	PRODUCT_ERROR,
	SET_CURRENT,
	CLEAR_CURRENT,
} from "../types";

const ProductState = (props) => {
	const initialState = {
		products: [],
		current: null,
		loading: true,
		error: null,
	};

	const [state, dispatch] = useReducer(productReducer, initialState);

	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const addProduct = async (formData) => {
		try {
			const response = await axios.post("/products", formData, config);

			dispatch({
				type: ADD_PRODUCT,
				payload: response.data,
			});
		} catch (error) {
			console.error(error);
			dispatch({
				type: PRODUCT_ERROR,
				payload: error.response.msg,
			});
		}
	};

	const addImage = async (product_Id, formData) => {
		try {
			console.log(product_Id);
			const response = await axios.put(
				`/products/image/${product_Id}`,
				formData,
				config
			);
			console.log("RESPONSE");
			dispatch({
				type: ADD_PRODUCT_IMAGE,
				payload: response.data,
			});
		} catch (error) {
			dispatch({
				type: PRODUCT_ERROR,
				payload: error.response.data.msg,
			});
		}
	};

	const loadProducts = async () => {
		try {
			const response = await axios.get("/products");
			dispatch({
				type: GET_PRODUCTS,
				payload: response.data,
			});
		} catch (error) {
			dispatch({
				type: PRODUCT_ERROR,
				payload: error.response,
			});
		}
	};
	const updateProduct = async (product_Id, formData) => {
		try {
			const response = await axios.put(
				`/products/${product_Id}`,
				formData,
				config
			);
			dispatch({
				type: UPDATE_PRODUCT,
				payload: response.data,
			});
		} catch (error) {
			dispatch({
				type: PRODUCT_ERROR,
				payload: error.response.data.msg,
			});
		}
	};

	const deleteProduct = async (product_Id) => {
		try {
			await axios.delete(`/products/${product_Id}`, config);
			dispatch({
				type: DELETE_PRODUCT,
				payload: product_Id,
			});
		} catch (error) {
			dispatch({
				type: PRODUCT_ERROR,
				payload: error.response.data.msg,
			});
		}
	};
	return (
		<ProductContext.Provider
			value={{
				products: state.products,
				loading: state.loading,
				error: state.error,
				addProduct,
				addImage,
				loadProducts,
				updateProduct,
				deleteProduct,
			}}>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductState;

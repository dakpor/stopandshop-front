import {
	ADD_PRODUCT,
	ADD_PRODUCT_IMAGE,
	CLEAR_PRODUCTS,
	DELETE_PRODUCT,
	FILTER_PRODUCT,
	GET_PRODUCTS,
	UPDATE_PRODUCT,
	PRODUCT_ERROR,
} from "../types";

const productReducer = (state, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return {
				...state,
				products: state.products.concat(action.payload),
				loading: false,
				error: null,
			};
		case ADD_PRODUCT_IMAGE:
			// Review!!
			return {
				...state,
				products: state.products.map((product) =>
					product._id === action.payload._id ? action.payload : product
				),
				loading: false,
				error: null,
			};
		case GET_PRODUCTS:
			return {
				...state,
				products: action.payload,
				loading: false,
			};
		case UPDATE_PRODUCT:
			return {
				...state,
				products: state.products.map((product) =>
					product._id === action.payload._id ? action.payload : product
				),
				loading: false,
			};
		case DELETE_PRODUCT:
			return {
				...state,
				products: state.products.filter((product) => product.id !== action.payload),
				loading: false,
			};
		case PRODUCT_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};

export default productReducer;

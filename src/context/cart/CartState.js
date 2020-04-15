import React, { useReducer } from "react";
import CartContext from "./cartContext";
import cartReducer from "./cartReducer";
import {
	ADD_TO_CART,
	GET_CART,
	REMOVE_FROM_CART,
	UPDATE_CART,
	CART_ERROR,
} from "../types";

const CartState = (props) => {
	const initialState = {
		cart: [1],
		loading: true,
		error: false,
	};

	const [state, dispatch] = useReducer(cartReducer, initialState);
	return (
		<CartContext.Provider
			value={{
				cart: state.cart,
				loading: state.loading,
				error: state.error,
			}}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartState;

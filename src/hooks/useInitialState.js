import { useState } from "react";

const initialState = {
	cart: [],
	toggleOrders: false,
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = (payload) => {
		setState({
			...state,
			cart: [...state.cart, payload]
		});
	}

	const removeFromCart = (indexValue) => {
		setState({
			...state,
			cart: state.cart.filter((product,index) => index !== indexValue)
		});
	}

	const setToggleOrders = (payload) => {
		setState({
			...state,
			toggleOrders: payload
		})
	}

	return {
		state,
		addToCart,
		removeFromCart,
		setToggleOrders
	}
}

export default useInitialState;

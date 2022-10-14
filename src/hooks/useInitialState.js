import { useState } from "react";

const initialState = {
	cart: [],
	toggleOrders: false,
	toggleMenu: false
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

	const setToggle = (menu, orders) => {
		setState({
			...state,
			toggleMenu: menu,
			toggleOrders: orders
		})
	}

	return {
		state,
		addToCart,
		removeFromCart,
		setToggle
	}
}

export default useInitialState;

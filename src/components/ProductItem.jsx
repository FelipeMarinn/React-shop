import React, { useContext, useState } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';

const ProductItem = ( props ) => {

	const { product, indexValue } = props
	const { state, addToCart, removeFromCart } = useContext(AppContext);

	const handleClick = (item, indexValue) => {
		itsProductAdded() ? removeFromCart(indexValue) : addToCart(item)	
	}

	// preguntar si el el producto existe en el estado o sea en el carrito
	const itsProductAdded = () => state.cart.some( (item) => item.id === product.id) ? true : false;

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product, indexValue)} >
					<img
					 className='add-to-cart' 
					 src={itsProductAdded() ? addedToCartImage : addToCartImage} 
					 alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;

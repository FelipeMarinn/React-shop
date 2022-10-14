import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MyOrder from '../containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import MenuMobile from './MenuMobile';

const Header = () => {
	const [menuToggle, setMenuToggle] = useState(false);
	const { state: {toggleMenu, toggleOrders, cart}, setToggle } = useContext(AppContext);

	const handleToggle = () => {
		setToggle(!toggleMenu,)
	}

	const menuLeftToggle = () => {
		setMenuToggle(!menuToggle)
	}

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" onClick={menuLeftToggle} />
			<div className="navbar-left">
				<a href="/" className='nav-logo'>
				  <img src={logo} alt="logo" className="logo-image" />
				</a>
				<ul className='menu-left'>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						platzi@example.com
					</li>
					<li
						className="navbar-shopping-cart"
						onClick={() => setToggle(null, !toggleOrders)}
					>
						<img src={shoppingCart} alt="shopping cart" />
						{cart.length > 0 ? <div>{cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{menuToggle && <MenuMobile/>}
			{toggleMenu && <Menu />}
			{toggleOrders && <MyOrder />}
		</nav>
	);
}

export default Header;

import React from 'react';
import '@styles/Menu.scss';
import '@styles/MenuMobile.scss'

const Menu = () => {

	return (
		<div className="Menu">
			<ul>
				<li>
					<a href="/" className="title">My orders</a>
				</li>
				<li>
					<a href="/">My account</a>
				</li>
				<li className='sing-out'>
					<a href="/">Sign out</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;

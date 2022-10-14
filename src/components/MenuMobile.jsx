import React from 'react'
import Menu from '@components/Menu'
import '@styles/MenuMobile.scss'

const MenuMobile = () => {

  return (
    <nav className='nav-mobile'>
        <div className='navbar'>
            <ul>
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
            <div className='settings-user'>
                <a href="/">My orders</a>
                <a href="/">My account</a>
                <div className="navbar-user">
                    <p className='user-email'>platzi@example.com</p>
                    <a className='sing-out' href="">Sing out</a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default MenuMobile

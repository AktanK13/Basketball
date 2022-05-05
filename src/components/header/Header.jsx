import React from 'react';
import './Header.css';
import logo from '../../images/block1/Logo.png';
import cart from '../../images/block1/Cart.png';
import favorite from '../../images/block1/Favorite.png';
import search from '../../images/block1/Search.png';


function Header() {
  return (
    <div className='header'>
        <div className='header-navbar'>
            <div className='logo'>
                <img src={logo}/>
            </div>
            <div className='navbar-menu'>
                <ul className='menu-ul'>
                    <li className='menu-li'>MAN</li>
                    <li className='menu-li'>WOMAN</li>
                    <li className='menu-li'>JERSEY</li>
                    <li className='menu-li'>TEAMS</li>
                    <li className='menu-li'>APP</li>
                </ul>
            </div>
            <div className='navbar-icon'>
                <ul className='icon-ul'>
                    <li className='icon-li'>
                        <a href="#"><img src={search}/></a>
                    </li>
                    <li className='icon-li'>
                        <a href="#"><img src={favorite} /></a>
                    </li>
                    <li className='icon-li'>
                        <a href="#"><img src={cart} /></a>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <ul className='url-ul'>
                <li className='url-li'><a href="#">Jersey</a></li>
                <li className='url-li'><a href="#">Nike & NBA Collaboration</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header
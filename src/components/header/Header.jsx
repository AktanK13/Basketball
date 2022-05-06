import React from 'react';
import './Header.css';
import logo from '../../images/block1/Logo.png';
import cart from '../../images/block1/Cart.png';
import favorite from '../../images/block1/Favorite.png';
import search from '../../images/block1/Search.png';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='header'>
        <div className='header-navbar'>
            <div className='logo'>
                <Link to='/'><img src={logo}/></Link>
            </div>
            <div className='navbar-menu'>
                <ul className='menu-ul'>
                    <Link className='menu-li' to='/Man'><li>MAN</li></Link>
                    <Link className='menu-li' to='/Woman'><li>WOMAN</li></Link>
                    <li className='menu-li'><a href='#jersey'>JERSEY</a></li>
                    <li className='menu-li'><a href='#teams'>TEAMS</a></li>
                    <Link className='menu-li' to='/SignUp'><li>SIGNUP</li></Link>
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
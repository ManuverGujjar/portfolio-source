import React from 'react';
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className='navbar navbar-expand navbar-light'>
            <a className='navbar-brand'>Manuver Khan</a>
            <button className='navbar-toggler'  toggle-data='collapse' toggle-target='#supportedNavbar'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='navbar-collapse collapse' id='supportedNavbar'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'><Link className='nav-link' to='/about'>About</Link></li>
                    <li className='nav-item'><Link className='nav-link' to='/projects'>Projects</Link></li>
                </ul>
            </div>
        </nav>
    );
}
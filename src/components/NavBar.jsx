import React from 'react';
import { navLinks } from '../constants/constants.js';

const NavBar = () => {


    return (
    <header className="navbar">
        <div className="inner">
            <a className="logo" href="#hero">DG</a>

            <nav className="desktop">
                <ul>
                    {navLinks.map(({link, name}) => (
                        <li key={name} className="group">
                            <a href={link}>
                                <span>{name}</span>                        
                                <span className="underline"/>
                            </a>
                        </li>
                    ))}
                </ul>

            </nav>

            <a href="#contact" className="contact-btn group">
                <div className="inner">
                    <span>Contacto</span>

                </div>
            </a>

        </div> 
    </header>
    )
}

export default NavBar;
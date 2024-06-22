import React from 'react';
import { useState } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLastfm, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faGripLines, faTimes, faTimesCircle, faWindowClose, faWindowMinimize } from '@fortawesome/free-solid-svg-icons';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';



const Navbar
    = () => {

        const [active, setActive] = useState('navBar');

        const showNav = () => {
            setActive('navBar activeNavbar');
        }

        const removeNavbar = () => {
            setActive('navBar');
        }


        return (

            <section className='navbarSection'>

                <header className='header flex'>

                    <div className="logDiv">
                        <a href="#" className='logo flex'>
                            <h1> <FontAwesomeIcon icon={faLastfm} className='icon' /> <span>Travel.</span></h1>
                        </a>
                    </div>

                    <div className={active}>
                        <ul className='navLists flex'>
                            <li className='navItem'><a href="#" className='navLink active'>Home</a>
                            </li>


                            <li className='navItem'><a href="#" className='navLink'>Packages</a>
                            </li>


                            <li className='navItem'><a href="#" className='navLink'>Shop</a></li>

                            <li className='navItem'><a href="#" className='navLink'>About</a></li>

                            <li className='navItem'><a href="#" className='navLink'>Pages</a></li>

                            <li className='navItem'><a href="#" className='navLink'>News</a></li>

                            <li className='navItem'><a href="#" className='navLink'>Contact</a></li>


                            <button className='btn'>
                                <a href="#"> BOOK NOW</a>
                            </button>

                        </ul>

                        <div className="closeNavbar">
                            <FontAwesomeIcon icon={faTimesCircle} className='icon' onClick={removeNavbar} />

                        </div>
                    </div>

                    <div className="toggleNavbar">
                        <FontAwesomeIcon icon={faWindows} className='icon' onClick={showNav} />
                    </div>


                </header>

            </section>
        );
    }

export default Navbar;

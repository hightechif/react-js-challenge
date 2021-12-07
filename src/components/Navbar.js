import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Home/Button';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Fadhil
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {<FontAwesomeIcon icon={click ? faTimes : faBars} />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link 
                                to='/challenges'
                                target=''
                                className='nav-links'
                                href='/challenges'
                                onClick={closeMobileMenu}
                            >
                                Challenges
                            </Link>
                        </li>
                        <li>
                            <Link
                                to=''
                                className='nav-links-mobile '
                                onClick={closeMobileMenu}
                            >
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                    {button && <Link to='' className='btn-mobile'><Button buttonStyle='btn--outline'>CONTACT</Button></Link>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;

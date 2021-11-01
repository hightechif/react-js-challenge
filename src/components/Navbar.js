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
                        HOME
                        <img className='logo' src="./favicon.ico" alt="logo" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link 
                                to='/challenge01'
                                target=''
                                className='nav-links'
                                href='/challenge01'
                                onClick={closeMobileMenu}
                            >
                                Challenge01
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/challenge02'
                                target=''
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Challenge02
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/challenge03'
                                target=''
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Challenge03
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/challenge04'
                                target=''
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Challenge04
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

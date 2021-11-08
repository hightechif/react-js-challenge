import {Link} from 'react-router-dom';

const Challenges = () => {
    return (
        <div className='challenges'>
            <li className='nav-item'>
                <Link
                    to='/challenge01'
                    target=''
                    className='nav-links'
                    href='/challenge01'
                >
                    Challenge01 - React Components (HTML, CSS)
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/challenge02'
                    target=''
                    className='nav-links'
                >
                    Challenge02 - Responsive Design (Media Query & SASS)
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/challenge03'
                    target=''
                    className='nav-links'
                >
                    Challenge03 - Styled Components
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/challenge04'
                    target=''
                    className='nav-links'
                >
                    Challenge04 - Elevenia Master-UI (Private Component Library)
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/challenge05'
                    target=''
                    className='nav-links'
                >
                    Challenge05 - To Do List (React Props & State)
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/challenge06'
                    target=''
                    className='nav-links'
                >
                    Challenge06 - Counter App (React CRUD)
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/challenge07'
                    target=''
                    className='nav-links'
                >
                    Challenge07 - Form & Table (React Form CRUD, Tailwind)
                </Link>
            </li>
        </div>
    )
}

export default Challenges;

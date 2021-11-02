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
                    Challenge01 - React Components
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/challenge02'
                    target=''
                    className='nav-links'
                >
                    Challenge02 - Responsive Design
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
                    Challenge04 - Elevenia Master-UI
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/challenge05'
                    target=''
                    className='nav-links'
                >
                    Challenge05 - To Do List
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/challenge06'
                    target=''
                    className='nav-links'
                >
                    Challenge06 - Counter App
                </Link>
            </li>
        </div>
    )
}

export default Challenges;

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-container'>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            FADHIL
                            <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className='website-rights'>FADHIL &copy; 2021</small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link facebook'
                            to='//github.com/ridhanf'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-github' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='//www.linkedin.com/in/ridhanf'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                        <Link
                            className='social-icon-link instagram'
                            to='//www.instagram.com/ridhanfadhil'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='//www.twitter.com/HighTechCode'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;
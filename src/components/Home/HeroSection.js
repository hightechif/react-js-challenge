import { Link } from 'react-router-dom';
import { Button } from './Button';
import { StyledHero } from './Hero.styled';

const HeroSection = () => {
	return (
		<StyledHero>
			<img className="heroImg" src="/images/img-home.jpg" alt="" />
			<h1>TMT Frontend Challenges</h1>
			<p>by Ridhan Fadhilah</p>
			<div className="hero-btns">
				<Link to='//linkedin.com/in/ridhanf' target='_blank' className='btn-mobile'>
					<Button
						className='hero-btns'
						buttonStyle='home-btn--outline'
						buttonSize='home-btn--large'
					>
						SEE LINKEDIN
					</Button>
				</Link>
				<Link to='//github.com/ridhanf/react-js-challenge' target='_blank' style={{ textDecoration: 'none', color: 'black' }}>
					<Button
						className='hero-btns'
						buttonStyle='home-btn--primary'
						buttonSize='home-btn--large'
					>
						SOURCE CODE
						<i className='far fa-solid fa-file-code' />
					</Button>
				</Link>
			</div>
		</StyledHero>
	)
}

export default HeroSection;
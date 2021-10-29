import { Link } from 'react-router-dom';
import { Button } from './Button';
import { StyledHero } from './Hero.styled';

const HeroSection = () => {
	return (
		<StyledHero>
			<img className="heroImg" src="/img/img-home.jpg" alt="" />
			<h1>TMT Frontend Challenges</h1>
			<p>by Ridhan Fadhilah</p>
			<div className="hero-btns">
				<Link to='//github.com/ridhanf' target='_blank' className='btn-mobile'>
					<Button
						className='hero-btns'
						buttonStyle='btn--outline'
						buttonSize='btn--large'
					>
						SEE GITHUB
					</Button>
				</Link>
				<a href='#portfolios' style={{ textDecoration: 'none', color: 'black' }}>
					<Button
						className='hero-btns'
						buttonStyle='btn--primary'
						buttonSize='btn--large'
					>
						PORTFOLIOS
						<i className='far fa-play-circle' />
					</Button>
				</a>
			</div>
		</StyledHero>
	)
}

export default HeroSection;
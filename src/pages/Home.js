import React from 'react'
import Button from '../components/Button/Button';

const Home = ({text, className, textStyle}) => {
    return (
        <div className="button-container">
            <Button text="Button Primary" className="btn-primary" textStyle="btn-primary-text"/>
            <Button text="Button Secondary" className="btn-secondary" textStyle="btn-secondary-text"/>
        </div>
    )
}

export default Home;

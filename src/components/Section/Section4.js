import React from 'react';
import {Link} from 'react-router-dom';

const Section4 = (props) => {
    return (
        <section className="section-4">
            <div className="section-4__wrapper">
                <div>
                    <figure className='box__item__pic-wrap'>
                        <img 
                            className='box__item__img'
                            src="img/Media3.png" 
                            alt="Media" 
                        />
                    </figure>
                    <div className="description">
                        <p>Author name</p>
                        <h1>The best way to wireframe a website </h1>
                        <Link 
                            className='hyperlink'
                            to='#'
                            target=''
                        >
                            Read Mode
                        </Link>
                    </div>
                </div>
                <div>
                    <article className='article' id="article1">
                        <h3>Keys to writing copy that actually converts and sells users</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
                        <Link
                            className='hyperlink'
                            to='#'
                            target=''
                        >
                            Read More
                        </Link>
                    </article>
                    <article className='article' id="article2">
                        <h3>Keys to writing copy that actually converts and sells users</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
                        <Link
                            className='hyperlink'
                            to='#'
                            target=''
                        >
                            Read More
                        </Link>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Section4;

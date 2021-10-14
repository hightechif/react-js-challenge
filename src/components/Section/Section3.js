import React from 'react';
import Content from '../Content/Content';

const Section3 = (props) => {
    return (
        <section className="section-3">
            <div className="content__container">
                <div className="content-1">
                    <p>The best way to wireframe a website or landing page</p>
                </div>
                <div className="content-2">
                    <p>Category</p>
                    <p>Keys to writing copy that actually converts and sells users</p>
                </div>
                <Content 
                    className='content content-3' 
                    category='Category' 
                    copywriting='Keys to writing copy that actually converts and sells users' 
                    author='Author name'
                />
                <Content 
                    className='content content-4' 
                    category='Category' 
                    copywriting='Keys to writing copy that actually converts and sells users' 
                    author='Author name'
                />
            </div>
        </section>
    )
}

export default Section3;

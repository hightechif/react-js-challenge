import React from 'react';
import Content from '../Content/Content';

const Section3 = (props) => {
    return (
        <section className="section-3">
            <div>
                <p>The best way to wireframe a website or landing page</p>
            </div>
            <div>
                <p>Category</p>
                <p>Keys to writing copy that actually converts and sells users</p>
            </div>
            <div>
                <Content 
                    className='content' 
                    category='Category' 
                    copywriting='Keys to writing copy that actually converts and sells users' 
                    author='Author name'
                />
                <Content 
                    className='content' 
                    category='Category' 
                    copywriting='Keys to writing copy that actually converts and sells users' 
                    author='Author name'
                />
            </div>
        </section>
    )
}

export default Section3;

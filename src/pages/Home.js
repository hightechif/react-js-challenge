import React from 'react';
import {Link} from 'react-router-dom';

const Home = ({text, className, decorator}) => {
     return (
          <div className="home">
               <h1>Welcome to TMT Frontend Challenges</h1>
               <h2>build by Fadhil</h2>
               <br />
               <p>Pick the project challenge:</p>
               <Link className='hyperlink' to="/challenge01" target=''>
                    Challenge 01 - React Components
               </Link>
               <br />
               <Link className='hyperlink' to="/challenge02" target=''>
                    Challenge 02 - Responsive Landing Page
               </Link>
               <br />
               <Link className='hyperlink' to="/challenge03" target=''>
                    Challenge 03 - Styled-Components
               </Link>
               <br />
               <Link className='hyperlink' to="/challenge04" target=''>
                    Challenge 04 - Elevenia Master-UI
               </Link>
          </div>
     )
}

export default Home;

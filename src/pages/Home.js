import styled from 'styled-components';
import HeroSection from '../components/Home/HeroSection';
// import Cards from '../components/Home/Cards';
// import Footer from '../components/Home/Footer';
import '@elevenia/master-ui/Theme/index.css';
import '@elevenia/master-ui/assets/index.css';

const StyledHome = styled.div`
     box-sizing: border-box;
     margin: 0;
     padding: 0;
     font-family: 'PT Sans', sans-serif;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     font-size: 3rem;

     .home,
     .resume,
     .portfolios,
     .sign-up {
          display: flex;
          height: 90vh;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
     }

     .resume {
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          color: #fff;
          font-size: 100px;
     }

     .portfolios {
          background-position: center;
          background-size: fill;
          background-repeat: no-repeat;
          color: #fff;
          font-size: 100px;
     }

     .sign-up {
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          color: #fff;
          font-size: 100px;
     }
`

const Home = ({text, className, decorator}) => {
     return (
          <StyledHome>
               <HeroSection />
               {/* <Cards /> */}
               {/* <Footer /> */}
          </StyledHome>
     )
}

export default Home;

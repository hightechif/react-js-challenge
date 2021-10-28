import { ThemeProvider } from 'styled-components';
import Header from "../components/Challenge03/Header";
import Footer from "../components/Challenge03/Footer";
import Card from "../components/Challenge03/Card";
import { Container } from "../components/Challenge03/styles/Container.styled";
import GlobalStyles from '../components/Challenge03/styles/Global';
import content from '../assets/content';

const theme = {
  colors: {
    header: '#EBFBFF',
    body: '#FFFFFF',
    footer: '#003333'
  },
  mobile: '768px',
}

function Challenge03() {
  return (
    <ThemeProvider theme= {theme}>
      <>
        <GlobalStyles />
        <Header/>
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item}/>
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default Challenge03;

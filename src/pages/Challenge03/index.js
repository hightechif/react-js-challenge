import { ThemeProvider } from 'styled-components';
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import { Container } from "./styles/Container.styled";
import GlobalStyles from './styles/Global';
import content from '../../assets/content';

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

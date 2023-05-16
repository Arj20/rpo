import { ThemeProvider } from '@emotion/react';
import Navbar from './components/Navbar';
import { theme } from './utils/theme';
import { ImageWrapper } from './components/Image';
import { CardWrapper } from './components/CardWrapper';
import { CssBaseline } from '@mui/material';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Feedback } from './components/Feedback';
import { Questions } from './components/QnA';
import { Footer } from './components/Footer';
import { Suspense } from 'react';

import './index.css';
import { Loader } from './components/Loader';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={() => <Loader message="We will be joining you soon..." />}>
        <Navbar />
        <ImageWrapper />
        <CardWrapper />
        <AboutUs />
        <Services />
        <Contact />
        <Feedback />
        <Questions />
        <Footer />
      </Suspense >
    </ThemeProvider >
  );
}

export default App;

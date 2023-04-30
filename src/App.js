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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Navbar />
        <ImageWrapper />
        <CardWrapper />
        <AboutUs />
        <Services />
        <Contact />
        <Feedback />
      </div>
    </ThemeProvider>
  );
}

export default App;

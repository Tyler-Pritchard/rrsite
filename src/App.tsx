import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import Home from "./pages/Home/Home";
import Construction from './pages/Construction/Construction';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import GlobalStyle from "./globalStyles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#f44336',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<Construction />} />
        <Route path="/past" element={<Construction />} />
        <Route path="/news" element={<Construction />} />
        <Route path="/press" element={<Construction />} />
        <Route path="/and-on-top-of-that" element={<Construction />} />
        <Route path="/band/timeline" element={<Construction />} />
        <Route path="/history" element={<Construction />} />
        <Route path="/releases" element={<Construction />} />
        <Route path="/media" element={<Construction />} />
        <Route path="/songs" element={<Construction />} />
        <Route path="/videos" element={<Construction />} />
        <Route path="/photos" element={<Construction />} />
        <Route path="/podcast" element={<Construction />} />
        <Route path="/museum" element={<Construction />} />
        <Route path="/register" element={<Construction />} />
        <Route path="/fans/club-news" element={<Construction />} />
        <Route path="/fans/so-what" element={<Construction />} />
        <Route path="/contests" element={<Construction />} />
        <Route path="/videos/?category=Fifth Member Exclusives" element={<Construction />} />
        <Route path="/photos/?category=Fifth Member Exclusives" element={<Construction />} />
        <Route path="https://www.forums.robrich.band" element={<Construction />} />
        <Route path="/fans/local-chapters" element={<Construction />} />
        <Route path="/store-landing-page/home" element={<Construction />} />
        <Route path="/store/featured" element={<Construction />} />
        <Route path="/store/music" element={<Construction />} />
        <Route path="/store/clothing" element={<Construction />} />
        <Route path="/store/accessories" element={<Construction />} />
        <Route path="/store/collections" element={<Construction />} />
        {/* Fallback route */}
        <Route path="*" element={<Construction />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
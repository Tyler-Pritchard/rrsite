import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Timeline from './pages/About/Timeline';
import Construction from './pages/Construction/Construction';
import FAQ from './pages/FAQ/faq';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import GlobalStyle from "./globalStyles";


const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
      </Helmet>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tour" element={<Construction />} />
          <Route path="/past" element={<Construction />} />
          <Route path="/news" element={<Construction />} />
          <Route path="/press" element={<Construction />} />
          <Route path="/and-on-top-of-that" element={<Construction />} />
          <Route path="/band/timeline" element={<Timeline />} />
          <Route path="/history" element={<Construction />} />
          <Route path="/releases" element={<Construction />} />
          <Route path="/media" element={<Construction />} />
          <Route path="/songs" element={<Construction />} />
          <Route path="/videos" element={<Construction />} />
          <Route path="/photos" element={<Construction />} />
          <Route path="/podcast" element={<Construction />} />
          <Route path="/museum" element={<Construction />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/privacy-policy" element={<Construction />} />
          <Route path="/help" element={<FAQ />} />
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
    </HelmetProvider>
  );
};

export default App;

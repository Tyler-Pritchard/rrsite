import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Timeline from "./pages/About/Timeline";
import Construction from "./pages/Construction/Construction";
import FAQ from "./pages/FAQ/faq";
import Products from "./pages/Shop/Products/Products";
import ProductDetails from "./pages/Shop/Products/ProductDetails";
import Tour from "./pages/Tour/Tour";
import Past from "./pages/Tour/Past";
import Event from './pages/Tour/Event';
import { Helmet, HelmetProvider } from "react-helmet-async";
import GlobalStyle from "./globalStyles";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        />
      </Helmet>
      <GlobalStyle />
      <Header />
      <Routes>
        {/* Home and Basic Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/privacy-policy" element={<Construction />} />
        <Route path="/help" element={<FAQ />} />

        {/* Band Information Routes */}
        <Route path="/band/timeline" element={<Timeline />} />
        <Route path="/history" element={<Construction />} />
        <Route path="/releases" element={<Construction />} />
        <Route path="/songs" element={<Construction />} />
        <Route path="/videos" element={<Construction />} />
        <Route path="/photos" element={<Construction />} />
        <Route path="/podcast" element={<Construction />} />
        <Route path="/museum" element={<Construction />} />

        {/* Fans and Community Routes */}
        <Route path="/tour" element={<Tour />} />
        <Route path="/tour/past" element={<Past />} />
        <Route path="/tour/:slug" element={<Event />} />

        {/* Shop Routes */}
        <Route path="/shop/products" element={<Products />} />
        <Route path="/shop/products/:id" element={<ProductDetails />} />

        {/* Store Routes */}
        <Route path="/store/featured" element={<Construction />} />
        <Route path="/store/music" element={<Construction />} />
        <Route path="/store/clothing" element={<Construction />} />
        <Route path="/store/accessories" element={<Construction />} />
        <Route path="/store/collections" element={<Construction />} />

        {/* Fans and Community Routes */}
        <Route path="/fans/club-news" element={<Construction />} />
        <Route path="/fans/so-what" element={<Construction />} />
        <Route path="/fans/local-chapters" element={<Construction />} />
        <Route path="/contests" element={<Construction />} />

        {/* Catch-All Fallback Route */}
        <Route path="*" element={<Construction />} />
      </Routes>
      <Footer />
    </HelmetProvider>
  );
};

export default App;

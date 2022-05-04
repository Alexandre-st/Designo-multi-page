import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import WebDesign from './pages/WebDesign/Webdesign';
import Footer from './components/Footer/Footer';

import './styles/index.scss';

const App = () => {
  return ( 
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/design" element={<WebDesign />} />
      </Routes>
      <Footer />
    </Router>
  );
}
 
export default App;
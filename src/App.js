import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './components/Header/Header';
import WebDesign from './pages/WebDesign/Webdesign';
import AppDesign from './pages/AppDesign/AppDesign';
import Footer from './components/Footer/Footer';

import './styles/index.scss';
import GraphicDesign from './pages/GraphicDesign/GraphicDesign';

const App = () => {
  return ( 
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/web-design" element={<WebDesign />} />
        <Route exact path="/app-design" element={<AppDesign />} />
        <Route exact path="/graphic-design" element={<GraphicDesign />} />
      </Routes>
      <Footer />
    </Router>
  );
}
 
export default App;
// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Works from './component/Works';
import About from './component/About';
import Footer from './component/Footer';
import Cursor from './component/Cursor';
import Skills from './component/Skills';
import ItemRotate from "./component/ItemRotate";
import Loading from "./component/Loading";
import worksData from "./worksData";
import Contact from './component/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);



  return (
    <Router>
      <div className="App relative">
        {loading && <Loading />}
        {!loading && (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<>
                <Hero />
                <Works worksData={worksData} />
                <Skills />
                <About />
                <Footer />
              </>} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Cursor />            
          </>
        )}
      </div>
    </Router>
  );
}

export default App;

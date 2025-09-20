import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Books from './components/BooksData/Books';
import About from './components/about'; 
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById('root')).render(
  <Router>
    <Navbar />
    <Routes>
      {/* Home Page = Carousel + Card */}
      <Route path="/" element={<Home />} />

      {/* Books Page */}
      <Route path="/books" element={<Books />} />

      {/* About Page */}
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);

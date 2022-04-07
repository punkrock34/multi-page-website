import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/HeaderAndFooter/Navigation";
import Footer from "./components/HeaderAndFooter/Footer";
import Home from "./components/Home";
import Calculator from "./components/Calculator";
import Todos from "./components/Todos";
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
    <Footer />
  </Router>,
);
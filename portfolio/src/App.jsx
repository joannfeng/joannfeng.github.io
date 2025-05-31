import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Contact from "./components/contact";

function App() {
  // const [count, setCount] = useState(0)
    return (
      <BrowserRouter>
        <div className="bg-indigo-600">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Projects />
                  <Footer />
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
}

export default App

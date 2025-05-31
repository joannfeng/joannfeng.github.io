import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Resume from "./components/resume";
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
                </>
              }
            />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    )
}

export default App

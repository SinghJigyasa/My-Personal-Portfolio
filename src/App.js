import React from "react";
import "./index.css";
import {Home} from "./Router/Home.js";
import {About} from "./Router/About";
import {Contact} from "./Router/Contact";
import {Project} from "./Router/Project";
import {BrowserRouter, Route, Routes,Link} from "react-router-dom"

function App() {
  return (
    <div className="container-fluid">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
       
    </div>
  );
}

export default App;

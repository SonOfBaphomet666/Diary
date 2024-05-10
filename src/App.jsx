import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./main.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/pages/home/home";
import MyBlog from "./components/pages/myBlog/myBlog";
import About from "./components/pages/about/about";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myBlog" element={<MyBlog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App;

import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./main.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/pages/home";
import MyBlog from "./components/pages/myBlog";
import CreateBlog from "./components/pages/createBlog";
import About from "./components/pages/about";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myBlog" element={<MyBlog />} />
        <Route path="/createBlog" element={<CreateBlog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App;

import Navbar from "./components/navbar/navbar";
import "./main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import MyBlog from "./pages/myBlog/myBlog";
import { APP_ROUTES } from "./utils/constants";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<Home />} />
        <Route path={APP_ROUTES.BLOG} element={<MyBlog />} />
        <Route path={APP_ROUTES.ABOUT} element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

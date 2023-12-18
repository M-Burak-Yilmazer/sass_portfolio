import "./scss/main.scss";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="home-bgImg-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

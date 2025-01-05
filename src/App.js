import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Howitworks from "./Pages/Howitworks";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<Howitworks />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

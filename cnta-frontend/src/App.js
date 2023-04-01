import React from "react";
import { Routes, Route } from "react-router-dom";
import AddProfile from "./components/AddProfile";
import AfterLogin from "./components/AfterLogin";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import ViewProfile from "./components/ViewProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<AfterLogin />} />
        <Route path="/addprofile" element={<AddProfile />} />
        <Route path="/viewprofile" element={<ViewProfile />} />
      </Routes>
    </div>
  );
}

export default App;

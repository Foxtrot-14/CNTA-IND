import React from "react";
import { Routes, Route } from "react-router-dom";
import AddProfile from "./components/AddProfile";
import AfterLogin from "./components/AfterLogin";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import ChildDetails from "./pages/ChildDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<AfterLogin />} />
        <Route path="/addprofile" element={<AddProfile />} />
        <Route path="/child/:id" element={<ChildDetails />} />
      </Routes>
    </div>
  );
}

export default App;

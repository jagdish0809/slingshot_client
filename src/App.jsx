import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserForm from "./pages/UserForm";
import MainAnim from "./pages/MainAnim";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userregistration" element={<UserForm />} />
        <Route path="/imageanimation" element={<MainAnim />} />
      </Routes>
    </Router>
  );
}

export default App;

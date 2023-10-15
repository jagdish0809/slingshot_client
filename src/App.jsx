import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserForm from "./pages/UserForm";
import MainAnim from "./pages/MainAnim";


function App() {
  const [imgclicked, setImgClicked] = useState(null)

  const saveimgapp = (data) => {
    setImgClicked(data)
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home passimg={saveimgapp}/>} />
        {
          imgclicked ? <Route path="/userregistration" element={<UserForm passedimg={imgclicked}/>} /> : ""
        }
        <Route path="/imageanimation" element={<MainAnim />} />
      </Routes>
    </Router>
  );
}

export default App;

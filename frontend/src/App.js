import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
import Home from "./components/home";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

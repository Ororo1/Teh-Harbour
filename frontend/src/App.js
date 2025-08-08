import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"; // ⬅️ no BrowserRouter here
import HomePage from "./pages/HomePage";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;

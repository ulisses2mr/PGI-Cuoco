import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/Homepage/homepage";
import Recipes from "./pages/Recipes/recipes";
import Learn from "./pages/Learn/learn";
import Disclaimer from "./pages/Disclaimer/disclaimer";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<HomePage/>} />
            <Route path="/recipes" element={<Recipes/>} />
            <Route path="/learn" element={<Learn/>} />
            <Route path="/disclaimer" element={<Disclaimer/>} />
          </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

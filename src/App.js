import { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/Homepage/homepage";
import Recipes from "./pages/Recipes/recipes";
import Learn from "./pages/Learn/learn";
import Disclaimer from "./pages/Disclaimer/disclaimer";
import './App.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// Initialize Google Analytics
ReactGA.initialize('G-6X3M05P1EV'); // Replace with your GA4 Measurement ID

function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    // Send a pageview event when the location changes
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return null; // This component doesn't render anything
}

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <PageViewTracker />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

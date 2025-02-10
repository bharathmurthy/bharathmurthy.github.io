import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga4';

// Initialize Google Analytics
const TRACKING_ID = "G-K19KZ9EEV1";  // Replace with your actual Measurement ID
ReactGA.initialize(TRACKING_ID, {
  debug: true,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Track page views
ReactGA.send("pageview");

// Performance tracking
reportWebVitals(console.log);

import React, { useEffect } from 'react';
import Portfolio from './components/Portfolio';
import ReactGA from 'react-ga4';
import Intercom from '@intercom/messenger-js-sdk';

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    const TRACKING_ID = "G-K19KZ9EEV1";  // Replace with your actual Measurement ID
    ReactGA.initialize(TRACKING_ID, {
      debug: true,
    });
    ReactGA.send("pageview");
    // Initialize Intercom
    Intercom({
      app_id: 'dn4szgb4',
    });
  }, []);

  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;
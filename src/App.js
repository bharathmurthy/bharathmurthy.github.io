import React, { useEffect } from 'react';
import Portfolio from './components/Portfolio';
import ReactGA from 'react-ga4';
import Intercom from '@intercom/messenger-js-sdk';

function App() {
  Intercom({
    app_id: 'dn4szgb4',
  });
  
  useEffect(() => {
    ReactGA.send("pageview");
  }, []);

  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;
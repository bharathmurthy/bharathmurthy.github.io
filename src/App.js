import React, { useEffect } from 'react';
import Portfolio from './components/Portfolio';
import ReactGA from 'react-ga4';

function App() {
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
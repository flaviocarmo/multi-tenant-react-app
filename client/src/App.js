import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getConfig } from './services/config.service';
import Routes from './Routes';

function App() {

  
  const [config, setConfig] = useState({ loading: true, data: {} });
  const { loading, data } = config;

  useEffect(() => {
    async function getConfigAsync(){
      const { data } = await getConfig();
      setConfig({ data });
    }
  
    getConfigAsync();
  }
  , []);
  
  return (
    <div className="App">
      <header className="App-header">
          {
            loading && <img src={logo} className="App-logo" alt="logo" />
          }
          {
            data.error && <p>'Error getting config from server'</p>
          }
          
          <Routes routes={data.routes}/>
      </header>
    </div>
  );
}

export default App;

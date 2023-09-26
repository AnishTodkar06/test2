import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { Sepolia } from "@thirdweb-dev/chains";
import { useContract } from "@thirdweb-dev/react";

import { StateContextProvider } from './context';
import App from './App';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider activeChain= { Sepolia } 
  clientId="55721a5f4e7be0e0df6061ac9a1122f0" > 
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)
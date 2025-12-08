import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App.jsx';

import 'flowbite';
import { initFlowbite } from 'flowbite';

// Reinitialize Flowbite after each HMR reload
if (import.meta.hot) {
  import.meta.hot.on("vite:afterUpdate", () => {
    setTimeout(() => {
      initFlowbite();
    }, 10);
  });
}

// Initialize on first load also
setTimeout(() => {
  initFlowbite();
}, 10);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/youtube'>
      <App />
    </BrowserRouter>
  </StrictMode>
);

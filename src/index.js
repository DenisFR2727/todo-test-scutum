import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './components/app/App';

import { Provider } from 'react-redux';
import store from "../src/components/store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
         <App />
     </Provider>
  </React.StrictMode>
);


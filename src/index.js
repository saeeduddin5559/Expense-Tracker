import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { Provider } from 'react-redux';
import store from './redux/Store';
import App from './App';

console.log('Redux Store:', store); 

const container = document.getElementById('root');

// Create the root and render the app using createRoot
const root = createRoot(container); // createRoot is used in place of ReactDOM.render
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

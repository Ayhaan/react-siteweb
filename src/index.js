import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Your css
import './sass/app.sass'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'   
// icon
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'  


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


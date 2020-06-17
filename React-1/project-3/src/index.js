import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';


const All = () => {
  return (
    <App />
  )
}


ReactDOM.render(
  <React.StrictMode>
    <All />
  </React.StrictMode>,
  document.getElementById('root')
);
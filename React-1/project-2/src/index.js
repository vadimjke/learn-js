import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const Header = () => {
  return <h2>Hello World!!!</h2>
}

const Field = () => {
  const holder = "Enter here"
  const stleField = {
    width: '600px'
  }
  return <input
    style={stleField}
    type="text"
    placeholder={holder}
    autoComplete=""
    className="first"
    htmlFor="" />
}

const Button = () => {
  const text = "False"
  const logged = false;
  const res = () => {
    return '  true '
  }







  // return <button> {text} {res()} </button>
  return <button> {logged ? res() : text} </button>
}

const App = () => {
  return (
    <div>
      <Header />
      <Field />
      <Button />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

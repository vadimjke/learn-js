import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './App';
import Button from './button';
import * as serviceWorker from './serviceWorker';

// function Greet(props) {
//     return(
//       <h1> Hello {props.phrase}! My name is {props.name}</h1>
//   )
// }

// function GreetAll() {
//   return(
//     <div>
//       <Greet phrase="world" name="Alex"/>;
//       <Greet phrase="world" name="Michael"/>;
//       <Greet phrase="world" name="Ivan"/>;
//     </div>
//   )
// }


// const element = <Greet phrase="world" name="Ivan"/>;

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Clock />
        <Button />
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

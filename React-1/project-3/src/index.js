import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';

class WhoAmI extends Component {
  // OLD DECLARATION
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     years: 26
  //   }


  // NEW DECLARATION
  state = {
    years: 26
  }

  // 1st METHOD + OLD DECLARATION
  // this.nextYear = this.nextYear.bind(this)

  // 2nd METHOD + OLD DECLARATION
  //     this.nextYear = () => {
  //   this.setState(state => ({
  //     years: state.years++
  //   }))
  // }

  // 3rd METHOD + NEW DECLARATION
  nextYear = () => {
    this.setState(state => ({
      years: state.years++
    }))




    // 1st METHOD
    // nextYear() {
    //   console.log("asd")
    //   this.setState(state => ({
    //     years: state.years++
    //   }))
    // }




  }


  render() {
    const { name, surname, link } = this.props
    const { years } = this.state
    return (
      <div>
        <button onClick={this.nextYear}>++</button>
        <h1>My name is {name}, surname - {surname}, years = {years}</h1>
        <a href={link}>Link</a>
      </div>
    );
  }
}


const All = () => {
  return (
    <>
      <WhoAmI name="John" surname="Doe" link="abc"></WhoAmI>
      <WhoAmI name="John" surname="Smith" link="bbc"></WhoAmI>
      <WhoAmI name="John" surname="Goncharenko" link="qwe"></WhoAmI>
    </>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <All />
  </React.StrictMode>,
  document.getElementById('root')
);
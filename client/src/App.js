import React, { Component } from 'react'
import "./App.scss";
import Header from "./components/Header/Header";
import About from "./components/About/About"


export default class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <About/>
      </div>
    )
  }
}

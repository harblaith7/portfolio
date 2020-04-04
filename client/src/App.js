import React, { Component } from 'react'
import "./App.scss";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects"


export default class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <About/>
          <Skills/>
          <Projects/>
      </div>
    )
  }
}

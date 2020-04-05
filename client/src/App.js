import React, { Component } from 'react'
import "./App.scss";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects"
import Nav from "./components/Nav/Nav"


export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        isNavOpen : false
    }
  }

  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }

  render() {
    return (
      <div>
          <button onClick={this.toggleNav}>Hamburger</button>
          <Nav 
            isNavOpen={this.state.isNavOpen}
            toggleNav = {this.toggleNav}
          />
          <Header/>
          <About/>
          <Skills/>
          <Projects/>
      </div>
    )
  }
}

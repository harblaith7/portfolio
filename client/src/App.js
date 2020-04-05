import React, { Component } from 'react'
import "./App.scss";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects"
import SideNav from "./components/SideNav/SideNav";
import Nav from "./components/Nav/Nav"


export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        isNavOpen : false,
        showBackgroundColor: false
    }
  }

  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
      
    })
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if(window.scrollY > 650) {
        this.setState({
          showBackgroundColor: true
        })
      } else {
        this.setState({
          showBackgroundColor: false
        })
      }
    });
  }

  render() {
    return (
      <div>
          <Nav showBackgroundColor={this.state.showBackgroundColor}/>
          <SideNav 
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


//<button onClick={this.toggleNav}>Hamburger</button>
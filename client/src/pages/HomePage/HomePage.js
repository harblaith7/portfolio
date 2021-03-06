import React, { Component } from 'react'
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects"
import SideNav from "../../components/SideNav/SideNav";
import Nav from "../../components/Nav/Nav"
import orangeBackground from "../../assets/Images/orangepath.svg"

export default class HomePage extends Component {

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
      if(window.scrollY > 550) {
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
      <div className="HomePage">
          
          <Nav 
            showBackgroundColor={this.state.showBackgroundColor}
            toggleNav = {this.toggleNav}
          />
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
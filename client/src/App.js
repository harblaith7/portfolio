import React, { Component } from 'react'
import HomePage from "./pages/HomePage/HomePage"
import HighLightsPage from "./pages/HighLightsPage/HighLightsPage"
import SkillsDescription from "./pages/SkillsDescription/SkillsDescription"
import ProjectPage from "./pages/ProjectPage/ProjectPage"
import {Switch, Route, Link} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/skill/:id" component={SkillsDescription}/>
          <Route path="/project/:id" component={ProjectPage}/>
          <Route path="/highlights" component={HighLightsPage}/>
          <Route path="/" component={HomePage}/>
        </Switch>
        
      </div>
    )
  }
}

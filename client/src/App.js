import React, { Component } from 'react'
import HomePage from "./pages/HomePage/HomePage"
import HighLightsPage from "./pages/HighLightsPage/HighLightsPage"
import {Switch, Route, Link} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/highlights" component={HighLightsPage}/>
          <Route path="/" component={HomePage}/>
        </Switch>
        
      </div>
    )
  }
}

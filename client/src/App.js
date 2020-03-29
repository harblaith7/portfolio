import React, { Component } from 'react'
import "./App.scss";
import Node from "./components/Node/Node"
import Tree from "./components/Tree/Tree"

export default class App extends Component {
  render() {
    return (
      <div>
        <Tree/>
      </div>
    )
  }
}

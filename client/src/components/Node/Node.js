import React, { Component } from 'react'
import "./Node.scss"

class Node extends Component {

    constructor(props){
        super(props)
        this.state = {
            value : 40,
            left : null,
            right: null
        }
    }

    render() {
        return (
            <div className="Node">
                {this.props.value}
            </div>
        )
    }
}

export default Node

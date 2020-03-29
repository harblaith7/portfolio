import React, { Component } from 'react';
import Nodet from "../Node/Node";
import "./Tree.scss"

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}

export default class Tree extends Component {

    constructor(props){
        super(props)
        this.state = {
            nodeValues : [ 40, 45, 30, 49, 28, 34],
            root : null,
            tree: null,
            orderedValues : null
        }
    }

    componentDidMount = async () => {
        await this.creatingTree()
        await this.BFS()
        
    }

    creatingTree = () => {
        let root = this.state.root

        this.state.nodeValues.map(value => {
            let newNode = new Node(value);
            if(!root){
                root = newNode;
            } else {
                let current = root;
                while(true){
                    if(value > current.value){
                        if(!current.right){
                            current.right = newNode;
                            return
                        } else {
                            current = current.right
                        }
                    } else {
                        if(!current.left){
                            current.left = newNode;
                            return
                        } else {
                            current = current.left
                        }
                    }

                    
                }
            }
        })

        this.setState({
            tree : root
        })
    }

    BFS = () => {
        let node = this.state.tree,
            data = [],
            queue = []
        
        queue.push(node)

        while(queue.length){
            node = queue.shift()
            data.push(node.value)
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right) 
        }

        this.setState({
            orderedValues : data
        })
    }

    displayNodets = () => {
        return this.state.orderedValues.map(value => {
            return <Nodet value={value} />
        })
    }
    

    render() {
        return (
            <div className="Tree">
                {this.state.orderedValues && this.displayNodets()}
            </div>
        )
    }
}

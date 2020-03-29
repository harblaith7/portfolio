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
            tree: null
        }
    }

    componentDidMount = () => {
        this.creatingTree()
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

        console.log(root)
        this.setState({
            tree : root
        })
    }
    

    render() {
        return (
            <div className="Tree">
                <Nodet/>
            </div>
        )
    }
}

import React, { Component } from 'react'
import "./Skills.scss"
import {motion} from "framer-motion";

import react from "../../assets/Images/tech-stacks/react.png";
import node from "../../assets/Images/tech-stacks/nodejs.png";
import mongo from "../../assets/Images/tech-stacks/mongo.png";
import redux from "../../assets/Images/tech-stacks/redux.png";
import mysql from "../../assets/Images/tech-stacks/mysql.png";
import typescript from "../../assets/Images/tech-stacks/Typescript.png";

export default class Skills extends Component {

    constructor(props){
        super(props)
        this.state = {
            skills : [
                {
                    image : react,
                    top: 50,
                    right: 80
                },
                {
                    image: node,
                    top: 10,
                    right: 60
                },
                {
                    image: redux,
                    top: 50,
                    right: 35
                },
                {
                    image: mongo,
                    top: 90,
                    right: 60
                },
                {
                    image: typescript,
                    top: 90,
                    right: 15
                },
                {
                    image: mysql,
                    top: 10,
                    right: 15
                }
            ]
        }
    }


    displayNodes = () => {
        return this.state.skills.map(skill => {
            return (
                <motion.div 
                    className="Skills__node"
                    style={{
                        backgroundImage : `url(${skill.image})`,
                        top: `${skill.top}%`,
                        right: `${skill.right}%`
                    }}
                    drag
                    dragConstraints={{
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }} 
                />
            )
        })
    }

    render() {
        
        return (
            <motion.div 
                className="Skills"
                
            >
                <div className="Skills__container">
                    <h3 className="Skills__heading">
                        My Skills
                    </h3>
                    <div className="Skills__graph-container">
                       {this.displayNodes()}
                       <svg style={{top: "17.5%", right: "37.5%", position: "absolute"}}><line x1="200%" y1="10%" x2="15%" y2="10%" stroke="black" style={{}}/></svg>
                    </div>
                </div>
            </motion.div>
        )
    }
}

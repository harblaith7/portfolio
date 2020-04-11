import React, { Component } from 'react'
import "./Skills.scss"
import {motion} from "framer-motion";

import react from "../../assets/Images/tech-stacks/react.png";
import node from "../../assets/Images/tech-stacks/nodejs.png";
import mongo from "../../assets/Images/tech-stacks/mongo.png";
import redux from "../../assets/Images/tech-stacks/redux.png";
import mysql from "../../assets/Images/tech-stacks/mysql.png";
import express from "../../assets/Images/tech-stacks/express.png";
import graphql from "../../assets/Images/tech-stacks/graphql.png"
import sass from "../../assets/Images/tech-stacks/sass.png";
import typescript from "../../assets/Images/tech-stacks/Typescript.png";
import questions from "../../assets/Images/question-mark.svg"
import "csshake"

export default class Skills extends Component {

    constructor(props){
        super(props)
        this.state = {
            skills : [
                {
                    image: questions,
                    top: 52,
                    right: 49,
                    name: "question"
                },
                {
                    image : react,
                    top: 50,
                    right: 80,
                    name: "react"
                },
                {
                    image: node,
                    top: 15,
                    right: 70,
                    name: "node"
                },
                {
                    image: redux,
                    top: 100,
                    right: 47.5,
                    name: "redux"
                },
                {
                    image: mongo,
                    top: 85,
                    right: 70,
                    name: "mongo"
                },
                {
                    image: typescript,
                    top: 85,
                    right: 25,
                    name: "typescript"
                },
                {
                    image: mysql,
                    top: 15,
                    right: 25,
                    name: "mysql"
                },
                {
                    image: graphql,
                    top: 50,
                    right: 15.5,
                    name: "graphql"
                },
                {
                    image: express,
                    top: 0,
                    right: 47.5,
                    name: "express"
                },
                
            ]
        }
    }


    displayNodes = () => {
        return this.state.skills.map(skill => {
            return (
                <motion.div 
                    className={`Skills__node shake-little ${skill.name === "question" && "Skills__node--small"}`}
                    id={skill.name}
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
                    <div className="Skills__skills-container">
                        <div className="Skills__graph-container">
                            {this.displayNodes()}
                        </div>
                        <div className="Skills__description">
                            adasd
                        </div>
                    </div>
                    
                </div>
            </motion.div>
        )
    }
}

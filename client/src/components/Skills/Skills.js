import React, { Component } from 'react'
import "./Skills.scss"
import {motion, AnimatePresence} from "framer-motion";

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
import "csshake";
import SkillDescription from "../SkillDescription/SkillDescription"

export default class Skills extends Component {

    constructor(props){
        super(props)
        this.state = {
            skills : [

                {
                    image : react,
                    top: 50,
                    right: 80,
                    name: "react",
                    concepts: ["React Router", "LifeCycle Methods", "Hooks", "Context"],
                    smallDescription: "I love React! I use it consistently on all my projects. Below I highlighted the concepts I understand about it and how it use it.",
                    uses: [
                        "Utilize react-router to create a multi page site",
                        "Fetching appropriate data by making an axios call with a route param id",
                        "Calling functions upon mounting, updating, and unmounting of a components with React LifeCycle methods"
                    ],
                    projects : [
                        {
                            project: "Blumber",
                            url: ""
                        },
                        {
                            project: "Greatrr",
                            url: ""
                        },
                        {
                            project: "my portfolio",
                            url: ""
                        },
                        {
                            project: "snake game",
                            url: ""
                        }
                    ]
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
                    name: "redux",
                    concepts: ["Centralized State", "Reducers", "Action Creators"],
                    smallDescription: "I found Redux to be extremely hard to grasp in the beginning. However, once I got past all the new terminology, I realized how powerful of a tool it can be.",
                    uses: [
                        "Place important information in centeralized state",
                        "Provide authentication status to all necessary components; allowing me to render appropriate HTML structures"
                    ],
                    projects : [
                        {
                            project: "Blumber",
                            url: ""
                        },
                        {
                            project: "Greatrr",
                            url: ""
                        },
                        {
                            project: "my portfolio",
                            url: ""
                        },
                        {
                            project: "snake game",
                            url: ""
                        }
                    ]
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
                
            ],
            currentDescription: "react",
            describeChange : false
        }
    }

    changeSkillDescription = (e) => {
        this.setState({
            currentDescription: e.target.id,
            describeChange : true
        }, () => {
            setTimeout(() => {
                this.setState({
                    describeChange: false
                })
            }, 750)
        })
    }


    displayNodes = () => {
        return this.state.skills.map(skill => {
            return (
                <motion.div 
                    className={`Skills__node shake-little ${skill.name === "question" && "Skills__node--small"}`}
                    id={skill.name}
                    onClick={this.changeSkillDescription}
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

    displayDescription = () => {
        const info =  this.state.skills.filter(skill => {
            return skill.name === this.state.currentDescription
        })

        return <SkillDescription skillsInfo = {info[0]}/>
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
                    <p className="Skills__header-description">
                        Alright, enough of me describing myself in the third-person. It's now time for you to check out my skills!
                        Hover over a node below and it will anxiously await a click. Once you click it, you'll get a description 
                        of what I know about that particular technology.
                    </p>
                    <div className="Skills__skills-container">
                        <div className="Skills__graph-container">
                            {this.displayNodes()}
                        </div>
                        <AnimatePresence>
                            {!this.state.describeChange && (
                                this.displayDescription()
                            )}
                        </AnimatePresence>
                        
                    </div>
                    
                </div>
            </motion.div>
        )
    }
}

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
import { HashLink as Link } from 'react-router-hash-link';

export default class Skills extends Component {

    constructor(props){
        super(props)
        this.state = {
            currentDescription: "react",
            describeChange : false,
            skillz : [
                {
                    name: "TypeScript",
                    id: "typescript",
                    img: "https://blog.syncfusion.com/wp-content/uploads/2018/08/ts_tile.png",
                },
                {
                    name: "React",
                    id:"react",
                    img: "https://wallpapercave.com/wp/wp4923981.jpg",
                },
                {
                    name: "Redux",
                    id: "redux",
                    img: "https://miro.medium.com/max/2880/1*n49UEh_U3iEqPHpp8eSSUw.png",
                },
                {
                    name: "GraphQL",
                    id: "graphql",
                    img: "https://miro.medium.com/max/5120/1*MGM-mwrfaPHWZIr0JiTKfA.png",
                },
                {
                    name: "Node",
                    id: "node",
                    img: "https://images8.alphacoders.com/380/380534.png",
                },
                {
                    name: "Express",
                    id: "express",
                    img: "https://raygun.com/blog/wp-content/uploads/2015/04/express1.png",
                },
                {
                    name: "MongoDB",
                    id: "mongodb",
                    img: "https://lh3.googleusercontent.com/iKHbqfOA22cBvWvdnGoi165ZxDy6lqWHDIrmDGORZU0NvNX_CgnexW8OgKmDVd5sQongQwCwsqsnu3SJCCPySlozJFYnJRE=s600",
                },
                {
                    name: "MySQL",
                    id: "mysql",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0DBkyBH8Xk41fW9jmSxidUCEHaQo0XAR_Ezr1R1LEBjkxPQwR&usqp=CAU",
                },
                {
                    name: "PostgreSQL",
                    id: "postgresql",
                    img: "https://miro.medium.com/max/3200/1*JHGJ98mdQ9d18XUWuMNMqw.jpeg",
                },
            ]
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

    displaySkillsCard = () => {
        return this.state.skillz.map(skill => {
            return (
                <Link className="Skills__skill-card-container" to={`/skill/${skill.id}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <img src={skill.img} alt="" className="Skills__skill-img"/>
                </Link>
            )
        })
    }


    displayNodes = () => {
        return this.state.skills.map(skill => {
            return (
                <motion.div 
                    className={`Skills__node shake-little Skills__node--${skill.name} ${skill.name === this.state.currentDescription && "shake-constant Skills__node--active"}`}
                    id={skill.name}
                    onClick={this.changeSkillDescription}
                    style={{
                        backgroundImage : `url(${skill.image})`
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
                id="skills"
            >
                <div className="Skills__container">
                    <div className="Skills__heading-container">
                        <h3 className="Skills__heading">
                            My Skills
                        </h3>
                        <p className="Skills__header-description">
                            Alright, enough of me describing myself in the third-person. It's now time for you to check out my skills!
                            Click on a card and you'll get a brief description of what I know about that particular technology.
                        </p>
                    </div>
                    
                    <div className="Skills__skills-container">
                        {this.displaySkillsCard()}
                    </div>
                    
                </div>
            </motion.div>
        )
    }
}

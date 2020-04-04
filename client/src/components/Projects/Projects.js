import React, { Component } from 'react';
import "./Projects.scss";
import Project from "../Project/Project";
import blumber from "../../assets/Images/blumber.png"
import greatrr from "../../assets/Images/Greatrr.png"
import portfolio from "../../assets/Images/portfolio.png"
import snakeGame from "../../assets/Images/snake.png"

export default class Projects extends Component {

    constructor(props){
        super(props)
        this.state = {
            projects : [
                {
                    name : "Blumber",
                    description: "Blumber is an online resources that helps university students ace their classes! It provides students with supplementary video lectures, online notes and practice problems.",
                    image: blumber
                },
                {
                    name: "Greatrr",
                    description: "Greatrr is a habit tracking and accountability applications. It allows you to reach your goals by tracking how you are spending your time and how often you are performing a habit.",
                    image: greatrr
                },
                {
                    name: "My Portfolio",
                    description: "My wonderful portfolio",
                    image: portfolio
                },
                {
                    name: "Voice Controlled Snake Game",
                    description: "Yes you read that right! The snake is controlled by your voice. Tell it where to go and after 5 tries it might listen. This project was done along aside Robert Nafrada for a 1 day pair programming challenge.",
                    image: snakeGame
                }
            ]
        }
    }

    displayProjects = () => {
        return this.state.projects.map(project => {
            return <Project name = {project.name} description={project.description} image={project.image}/>
        })
    }

    render() {
        return (
            <div className="Projects">
                <div className="Projects__container">
                    <h3 className="Projects__heading">
                        Projects
                    </h3>
                    <div className="Projects__projects-container">
                        {this.displayProjects()}
                    </div>
                </div>
            </div>
        )
    }
}

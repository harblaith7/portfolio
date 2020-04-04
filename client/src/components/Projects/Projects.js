import React, { Component } from 'react';
import "./Projects.scss";
import Project from "../Project/Project";
import blumber from "../../assets/Images/blumber.png"

export default class Projects extends Component {

    constructor(props){
        super(props)
        this.state = {
            projects : [
                {
                    name : "Blumber",
                    description: "Blumber is an online resources that helps university students ace their classes! It provides students with supplementary video lectures, online notes and practice problems.",
                    image: blumber
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

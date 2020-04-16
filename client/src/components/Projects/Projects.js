import React, { Component } from 'react';
import "./Projects.scss";
import Project from "../Project/Project";
import blumber from "../../assets/Images/blumber.png"
import greatrr from "../../assets/Images/Greatrr.png"
import portfolio from "../../assets/Images/portfolio.png"
import snakeGame from "../../assets/Images/snake.png"

import react from "../../assets/Images/tech-stacks/react.png"
import node from "../../assets/Images/tech-stacks/nodejs.png"
import passport from "../../assets/Images/tech-stacks/passport.png"
import redux from "../../assets/Images/tech-stacks/redux.png"
import stripe from "../../assets/Images/tech-stacks/stripe.png"
import mongo from "../../assets/Images/tech-stacks/mongo.png"
import framerMotion from "../../assets/Images/tech-stacks/framer-motion.png"

export default class Projects extends Component {

    constructor(props){
        super(props)
        this.state = {
            projects : [
                {
                    name : "Blumber",
                    description: "Blumber is an online resource that helps university students ace their classes! It provides students with supplementary video lectures, online notes and practice problems.",
                    image: blumber,
                    reason: "When I was in university, I found some courses to be extremely challenging. I would go to lectures, but I wouldn't grasp everything the professor was saying the first go round. Therefore, one day, I decided to video record the lecture and it helped immensely. That's how I got the idea for Blumber. I decided that it would be a great idea for previous student who have already excelled in the course to provided detailed video lectures about the university class. This way, a student can go over the concept at his/her pace and not have to worry about missing information.",
                    techStack: "To build this application, I used React, Redux, Node, Express and MongoDB. Authentication was done via Passport.js and the user data was stored in a user document in MongoDB Atlas. Payment handling was done with Stripe.js. Redux was used to communicate authentication status to necessary pages and to centralize course state for the cart.",
                    techStackImages: [react, redux, mongo, passport, stripe, node],
                    status: "Almost Complete / Not Responsive / Deployed",
                    url: "https://www.loom.com/share/c70d719d06684cabb217645cdaf173ab"
                },
                {
                    name: "Greatrr",
                    description: "Greatrr is a habit tracking and accountability application. It allows you to reach your goals by tracking how you are spending your time and how often you are performing a habit.",
                    image: greatrr,
                    reason: "In my forth year in university, I read the book Outliers by Malcolm Gladwell. It was such a fascinating and informative book. One concept that stood out to me was the fact that to be an outlier in any particular field you must first devote 10,000 hours towards its mastery. It really got me thinking about how much time I was devoting towards the things I wanted to be great at. To find out, I started tracking every minute of my day. I instantly became 10 times more productive and my self-esteem shot up. At the time, I was tracking my habits and how I was spending my time with pen and paper. Now I want to make a real application that you and I can benefit from!",
                    techStack: "To build this application, I used React, Redux, Node, Express and MongoDB. Authentication was done via Passport.js and the user data was stored in a user document in MongoDB Atlas. All non-user data are stored as subdocuments in the appropriate user document.",
                    techStackImages: [react, redux, mongo, passport, node],
                    status: "Current Project / / Not Complete / Not Responsive / Deployed",
                    url: "https://harb-greatrr.herokuapp.com/"
                },
                {
                    name: "My Portfolio",
                    description: "My wonderful portfolio",
                    image: portfolio,
                    reason: "I want to show you my projects! I also wanted to use this as an opportunity to learn more about how to animate a react application.",
                    techStack: "I simply used React for this project. However, I am utilizing framer-motion to create smooth animations",
                    techStackImages: [react, framerMotion],
                    status: "Almost Complete / Responsive / Deployed",
                    url: "https://laithharb.com/"
                },
                {
                    name: "Voice Controlled Snake Game",
                    description: "Yes you read that right! The snake is controlled by your voice. Tell it where to go and after 5 tries it might listen. This project was done along aside Robert Nafrada for a 1 day pair programming challenge.",
                    image: snakeGame,
                    reason: "This was done for a one day pair programming challenge. Building a regular snake game would have been too boring. We wanted to spice it up and have you control it with your own voice",
                    techStack: "We used React for this and JavaScript's built in voice recognition API",
                    techStackImages: [react],
                    status: "Complete  / Not Responsive / Deployed",
                    url: "https://stoic-hugle-8e3991.netlify.com/"
                }
            ]
        }
    }

    displayProjects = () => {
        return this.state.projects.map(project => {
            return (
                <Project 
                    name = {project.name} 
                    description={project.description} 
                    image={project.image} 
                    reason={project.reason} 
                    techStack={project.techStack} 
                    techStackImages={project.techStackImages} 
                    status={project.status}
                    url={project.url}
                />
            )
        })
    }

    render() {
        return (
            <div className="Projects" id="projects">
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

import React, { Component } from 'react'
import "./ProjectPage.scss"
import Nav from "../../components/Nav/Nav"
import {HashLink as Link} from "react-router-hash-link"

import react from "../../assets/Images/tech-stacks/react.png"
import node from "../../assets/Images/tech-stacks/nodejs.png"
import passport from "../../assets/Images/tech-stacks/passport.png"
import redux from "../../assets/Images/tech-stacks/redux.png"
import stripe from "../../assets/Images/tech-stacks/stripe.png"
import mongo from "../../assets/Images/tech-stacks/mongo.png"
import framerMotion from "../../assets/Images/tech-stacks/framer-motion.png"


export default class ProjectPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            projects : [
                {
                    name: "Greatrr",
                    id: "greatrr",
                    description: "Greatrr is a habit tracking and accountability application. It allows you to reach your goals by tracking how you are spending your time and how often you are performing a habit.",
                    reason: "In my forth year in university, I read the book Outliers by Malcolm Gladwell. It was such a fascinating and informative book. One concept that stood out to me was the fact that to be an outlier in any particular field you must first devote 10,000 hours towards its mastery. It really got me thinking about how much time I was devoting towards the things I wanted to be great at. To find out, I started tracking every minute of my day. I instantly became 10 times more productive and my self-esteem shot up. At the time, I was tracking my habits and how I was spending my time with pen and paper. Now I want to make a real application that you and I can benefit from!",
                    techStack: "To build this application, I used React, Redux, Node, Express and MongoDB. Authentication was done via Passport.js and the user data was stored in a user document in MongoDB Atlas. All non-user data are stored as subdocuments in the appropriate user document.",
                    status: "Current Project / Not Complete / Not Responsive / Deployed",
                    imgs: [react, node, passport, redux, mongo, framerMotion]
                },
                {
                    name: "Blumber",
                    id: "blumber",
                    description: "Blumber is an online resource that helps university students ace their classes! It provides students with supplementary video lectures, online notes and practice problems.",
                    reason: "When I was in university, I found some courses to be extremely challenging. I would go to lectures, but I wouldn't grasp everything the professor was saying the first go round. Therefore, one day, I decided to video record the lecture and it helped immensely. That's how I got the idea for Blumber. I decided that it would be a great idea for previous student who have already excelled in the course to provided detailed video lectures about the university class. This way, a student can go over the concept at his/her pace and not have to worry about missing information.",
                    techStack: "To build this application, I used React, Redux, Node, Express and MongoDB. Authentication was done via Passport.js and the user data was stored in a user document in MongoDB Atlas. Payment handling was done with Stripe.js. Redux was used to communicate authentication status to necessary pages and to centralize course state for the cart.",
                    status: "Almost Complete / Not Responsive / Deployed",
                    imgs: [react, node, passport, redux, mongo, stripe]
                },
                {
                    name: "Smart Germz",
                    id: "smart-germz",
                    description: "SmartGermz is an online platform for coders to improve their programming skills by reading comprehensive and enjoyable articles about their selected topic.",
                    reason: "When I was in university, I found some courses to be extremely challenging. I would go to lectures, but I wouldn't grasp everything the professor was saying the first go round. Therefore, one day, I decided to video record the lecture and it helped immensely. That's how I got the idea for Blumber. I decided that it would be a great idea for previous student who have already excelled in the course to provided detailed video lectures about the university class. This way, a student can go over the concept at his/her pace and not have to worry about missing information.",
                    techStack: "To build this application, I used React, Redux, Node, Express and MongoDB. Authentication was done via Passport.js and the user data was stored in a user document in MongoDB Atlas. Payment handling was done with Stripe.js. Redux was used to communicate authentication status to necessary pages and to centralize course state for the cart.",
                    status: "Almost Complete / Not Responsive / Deployed",
                    imgs: [react, node, passport, redux, mongo, framerMotion]
                },
                {
                    name: "Snake Game",
                    id: "snake-game",
                    description: "Yes you read that right! The snake is controlled by your voice. Tell it where to go and after 5 tries it might listen. This project was done along aside Robert Nafrada for a 1 day pair programming challenge.",
                    reason: "This was done for a one day pair programming challenge. Building a regular snake game would have been too boring. We wanted to spice it up and have you control it with your own voice",
                    techStack: "We used React for this and JavaScript's built in voice recognition API",
                    status: "Complete / Not Responsive / Deployed",
                    imgs: [react]
                },
            ],
            currentProject : {}
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        this.state.projects.map(project => {
            if(project.id === id){
                this.setState({
                    currentProject: project
                })
            }
        })
    }

    displayImage = () => {
        return this.state.currentProject.imgs.map(img => {
            return <img src={img} alt="" className="ProjectPage__img"/>
        })
    }

    render() {
        const {name, description, reason, techStack, id, imgs, status} = this.state.currentProject
        console.log(imgs)
        return (
            <div className="ProjectPage" id="project">
                <Nav/>
                <div className="ProjectPage__container">
                    <h2 className="ProjectPage__heading">
                        {name}
                    </h2>
                    <p className="ProjectPage__description">
                        {description}
                    </p>
                    <h3 className="ProjectPage__sub-header">
                         Reason Behind It
                    </h3>
                    <p className="ProjectPage__description">
                        {reason}
                    </p>
                    <h3 className="ProjectPage__sub-header">
                        Technology Stacks
                    </h3>
                    <p className="ProjectPage__description">
                        {techStack}
                    </p>
                    <div className="ProjectPage__img-container">
                        {imgs && this.displayImage()}
                    </div>
                    <h3 className="ProjectPage__sub-header">
                        Status

                    </h3>
                    <p className="ProjectPage__description">
                        {status}
                    </p>
                    
                </div>
                <Link className="SkillsDescription__go-back" to="/#projects">
                    Go Back
                </Link>
            </div>
        )
    }
}






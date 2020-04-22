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
            skills : [

                {
                    image : react,
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
                    name: "node",
                    concepts: ["Non-blocking I/O", "Event loop", "Modules", "Prototypes"],
                    smallDescription: "Node was the first technology I learned when diving into back-end development. I never use Node in isolation, but rather with Express as well.",
                    uses: [
                        "Store data in native JSON format in database",
                        "Creating easy, fast and scalable full-stack applications"
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
                    image: redux,
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
                    name: "mongoDB",
                    concepts: ["Documents/Subdocuments", "Embed/Reference", "Mongoose"],
                    smallDescription: "For all my applications that require a database, I've used MongoDB/Mongoose.",
                    uses: [
                        "Fetch appropriate user data based on authentication id",
                        "Perform all necessary CRUD operations"
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
                    image: typescript,
                    name: "typeScript",
                    concepts: ["Type System", "Annotation/Inference", "Design Patterns"],
                    smallDescription: "I am currently learning TypeScript. I'm realizing how powerful it can be to debug during development. Once I understand the concepts, I will use it in all my future JavaScript applications",
                    uses: [
                        "Catch errors in development instead of in the browser"
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
                    image: mysql,
                    name: "mySQL",
                    concepts: ["One to Many Relationship", "Many to Many Relationship", "Inner/Left/Right Join"],
                    smallDescription: "I learned MySQL on my own and I find that it is very readable and easy to use. I intend to use MySQL as my database for my next project.",
                    uses: [
                        "Join tables to create one table with desired data",
                        "Perform CRUD operations"
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
                    image: graphql,
                    name: "graphQL",
                    concepts: ["N/A"],
                    smallDescription: "Honestly, I don't know any GraphQL at the moment, but it is the next technology stack on my \"to learn\" list after TypeScript.",
                    uses: [
                        "N/A"
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
                    image: express,
                    name: "express",
                    concepts: ["Routes", "Callback", "Asynchronous"],
                    smallDescription: "I use the Express library all the time when making full-stack applications. It allows me to make complex routes that fetch data and redirect users to different pages",
                    uses: [
                        "Create routes to filter through and fetch appropriate data from database or JSON file",
                        "Create, send and save data to database"
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
                
            ],
            currentDescription: "react",
            describeChange : false,
            skillz : [
                {
                    name: "typescript",
                    img: "https://blog.syncfusion.com/wp-content/uploads/2018/08/ts_tile.png",
                },
                {
                    name: "React",
                    img: "https://wallpapercave.com/wp/wp4923981.jpg",
                },
                {
                    name: "Redux",
                    img: "https://miro.medium.com/max/2880/1*n49UEh_U3iEqPHpp8eSSUw.png",
                },
                {
                    name: "GraphQL",
                    img: "https://miro.medium.com/max/5120/1*MGM-mwrfaPHWZIr0JiTKfA.png",
                },
                {
                    name: "Node",
                    img: "https://images8.alphacoders.com/380/380534.png",
                },
                {
                    name: "Express",
                    img: "https://raygun.com/blog/wp-content/uploads/2015/04/express1.png",
                },
                {
                    name: "MongoDB",
                    img: "https://lh3.googleusercontent.com/iKHbqfOA22cBvWvdnGoi165ZxDy6lqWHDIrmDGORZU0NvNX_CgnexW8OgKmDVd5sQongQwCwsqsnu3SJCCPySlozJFYnJRE=s600",
                },
                {
                    name: "MySQL",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0DBkyBH8Xk41fW9jmSxidUCEHaQo0XAR_Ezr1R1LEBjkxPQwR&usqp=CAU",
                },
                {
                    name: "PostgreSQL",
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
                <Link className="Skills__skill-card-container" to="/">
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

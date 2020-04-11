import React, { Component } from 'react'
import {motion} from "framer-motion"

export default class SkillDescription extends Component {

    displayConcepts = () => {
        return this.props.skillsInfo.concepts.map(concept => {
            return (
                <li className="Skills__list-item">
                    {concept}
                </li>
            )
        })
    }

    displayUses = () => {
        return this.props.skillsInfo.uses.map(use => {
            return (
                <li className="Skills__list-item">
                    {use}
                </li>
            )
        })
    }

    render() {
        return (
            <motion.div 
                className="Skills__description-container"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 1}}
            >
                <h3 className="Skills__tech-title">
                    {this.props.skillsInfo.name}
                </h3>
                <p className="Skills__description">
                    {this.props.skillsInfo.smallDescription}
                </p>

                <h5 className="Skills__concepts-title">
                    Concepts
                </h5>
                <ul className="Skills__list">
                   {this.displayConcepts()}
                </ul>

                <h5 className="Skills__use-title">
                    How I used it
                </h5>
                <ul className="Skills__list">
                    {this.displayUses()}
                </ul>
                <h5 className="Skills__use-title">
                    Projects
                </h5>
                <ul className="Skills__list">
                    <li className="Skills__list-item">
                        Blumber, Greatrr, my portfolio, snake game
                    </li>
                                
                </ul>
            </motion.div>
        )
    }
}

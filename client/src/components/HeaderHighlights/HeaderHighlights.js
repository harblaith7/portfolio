import React, { Component } from 'react'
import "./HeaderHighlights.scss"
import dribbleDribbleDribble from "../../assets/Images/front-me.jpg"
import backIcon from "../../assets/Images/backIcon.svg"
import {Link} from "react-router-dom"

export default class HeaderHighlights extends Component {
    render() {
        return (
            <div className="HeaderHighlights">
                <Link to="/" className="HeaderHighlights__back-link">
                    <img src={backIcon} alt="" className="HeaderHighlights__back-icon"/>
                </Link>
                
                <div className="HeaderHighlights__container">
                    <div className="HeaderHighlights__text-container">
                        <h3 className="HeaderHighlights__header">
                            Things I do
                        </h3>
                        <p className="HeaderHighlights__description">
                            Guys, I'm not just some boring programmer that sits around and codes web applications all day. 
                            Sometimes I code web frameworks okay! In all seriousness, here are some pics and videos of non-programming 
                            things I enjoy doing. I'll add more post-quarantine.
                        </p>
                        <button className="HeaderHighlights__btn btn6" >Random button that does nothing</button>
                    </div>
                    <img src={dribbleDribbleDribble} alt="" className="HeaderHighlights__img"/>
                </div>
                
            </div>
        )
    }
}

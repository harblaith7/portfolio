import React, { Component } from 'react'
import "./HeaderHighlights.scss"
import dribbleDribbleDribble from "../../assets/Images/dribbledribbledribble.jpg"

export default class HeaderHighlights extends Component {
    render() {
        return (
            <div className="HeaderHighlights">
                <div className="HeaderHighlights__container">
                    <div className="HeaderHighlights__text-container">
                        <h3 className="HeaderHighlights__header">
                            Things I do
                        </h3>
                        <p className="HeaderHighlights__description">
                            Guys, I'm not just some boring programmer that sits around and codes web applications all day. 
                            Sometimes I code web frameworks as well. In all seriousness, here are some pics and videos of non-programming 
                            things I enjoy doing.
                        </p>
                        <button className="HeaderHighlights__btn btn6" >Random button that does nothing</button>
                    </div>
                    <img src={dribbleDribbleDribble} alt="" className="HeaderHighlights__img"/>
                </div>
                
            </div>
        )
    }
}

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
                            This Page is Mostly for Me
                        </h3>
                        <img src={dribbleDribbleDribble} alt="" className="HeaderHighlights__img"/>
                    </div>
                </div>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        )
    }
}

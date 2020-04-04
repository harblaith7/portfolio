import React, { Component } from 'react'
import "./Project.scss"
import blumber from "../../assets/Images/blumber.png"

export default class Project extends Component {
    render() {
        const {name, description, image} = this.props
        return (
            <div className="Project">
                <div className="Project__container">
                    <h4 className="Project__heading">
                        {name}
                    </h4>
                    <div className="Project__line"/>
                    <p className="Project__description">
                        {description}
                    </p>
                    <img src={image} alt="Image of laptop with blumber header" className="Project__img"/>
                    <div className="Project__btn-container">
                        <a href="/" className="Project__btn Project__btn--modal">
                            Learn More
                        </a>
                        <a href="/" className="Project__btn Project__btn--website">
                            View Website
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

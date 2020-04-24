import React, { Component } from 'react'
import "./Project.scss";
import {HashLink as Link} from "react-router-hash-link"


export default class Project extends Component {
    render() {
        const {name, description, image, status, reason, techStack, techStackImages, url, id} = this.props
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
                        <Link to={`/project/${id}#project`} className="Project__btn Project__btn--modal">
                            Learn More
                        </Link>
                        <a href={url} className="Project__btn Project__btn--website">
                            View Website
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

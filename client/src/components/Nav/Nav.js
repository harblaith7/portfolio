import React, { Component } from 'react'
import "./Nav.scss";
import hamburger from "../../assets/Images/hamburger.svg"
import {Link} from "react-router-dom"

export default class Nav extends Component {


    render() {
        return (
            <nav className={`Nav ${this.props.showBackgroundColor && "Nav--active"}`}>
                <div className={`Nav__container ${this.props.showBackgroundColor && "Nav__container--active"}`}>
                    <ul className="Nav__list">
                        <li className="Nav__list-item Nav__list-item--home">
                            <a href="#home" className={`Nav__link ${this.props.showBackgroundColor && "Nav__link--active"}`}>
                                Home
                            </a>
                        </li>
                        <li className="Nav__list-item">
                            <a href="#about" className={`Nav__link ${this.props.showBackgroundColor && "Nav__link--active"}`}>
                                About
                            </a>
                        </li>
                        <li className="Nav__list-item">
                            <a href="#skills" className={`Nav__link ${this.props.showBackgroundColor && "Nav__link--active"}`}>
                                Skills
                            </a>
                        </li>
                        <li className="Nav__list-item">
                            <a href="#projects" className={`Nav__link ${this.props.showBackgroundColor && "Nav__link--active"}`}>
                                Projects
                            </a>
                        </li>
                        <li className="Nav__list-item">
                            <Link to="/highlights" className={`Nav__link ${this.props.showBackgroundColor && "Nav__link--active"}`} >
                                Highlights
                            </Link>
                        </li>
                        <li className="Nav__list-item Nav__list-item--burger" onClick={this.props.toggleNav}>
                            <img src={hamburger} alt=""/>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

import React, { Component } from 'react'
import "./Nav.scss";
import hamburger from "../../assets/Images/hamburger.svg"

export default class Nav extends Component {


    render() {
        return (
            <nav className={`Nav ${this.props.showBackgroundColor && "Nav--active"}`}>
                <div className={`Nav__container ${this.props.showBackgroundColor && "Nav__container--active"}`}>
                    <ul className="Nav__list">
                        <li className="Nav__list-item Nav__list-item--home">
                            <a href="" className={`Nav__link ${this.props.showBackgroundColor && "Nav__link--active"}`}>
                                Home
                            </a>
                        </li>
                        <li className="Nav__list-item">
                            <a href="#about" className={`Nav__link ${this.props.showBackgroundColor && "Nav__link--active"}`}>
                                About
                            </a>
                        </li>
                        <li className="Nav__list-item">
                            <a href="#" className={`Nav__link ${this.props.showBackgroundColor && "Nav__link--active"}`}>
                                Skills
                            </a>
                        </li>
                        <li className="Nav__list-item">
                            <a href="#projects" className={`Nav__link ${this.props.showBackgroundColor && "Nav__link--active"}`}>
                                Projects
                            </a>
                        </li>
                        <li className="Nav__list-item">
                            <a href="#" className={`Nav__link ${this.props.showBackgroundColor && "Nav__link--active"}`}>
                                Highlights
                            </a>
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

import "./Header.scss"
import React, { Component } from 'react'
import {motion} from "framer-motion"

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header__container">
                    <div className="Header__heading-container">
                        <motion.div 
                            animate={{opacity: 1, x:100}} 
                            initial={{opacity: 0}}
                            transition={{duration:1.5}}
                            className="Header__text-container"
                        >
                            <h4 className="Header__hello-msg">Hello World</h4>
                            <h1 className="Header__name-msg">I'm Laith Harb</h1>
                            <h3 className="Header__position-msg">A Full-Stack Developer</h3>

                            <div className="Header__social-media-container">
                                <div class="button-wrap facebook">
                                    <div class="button-inner-wrap">
                                        <i class="icon-facebook inactive"></i>
                                        <i class="icon-facebook active"></i>
                                    </div>
                                </div>
                                <div class="button-wrap linkedin">
                                    <div class="button-inner-wrap">
                                        <i class="icon-linkedin inactive"></i>
                                        <i class="icon-linkedin active"></i>
                                    </div>
                                </div>
                                <div class="button-wrap github">
                                    <div class="button-inner-wrap">
                                        <i class="icon-github inactive"></i>
                                        <i class="icon-github active"></i>
                                    </div>
                                </div>
                                <div class="button-wrap google">
                                    <div class="button-inner-wrap">
                                        <i class="icon-google-plus inactive"></i>
                                        <i class="icon-google-plus active"></i>
                                    </div>
                                </div>
                            </div>

                            <a href="#" class="cta Header__project-btn">
                                <span className="Header__btn-text">View My Work</span>
                                <svg className="Header__btn-svg" width="13px" height="10px" viewBox="0 0 13 10">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </a>

                        </motion.div>
                    </div>
                    <div className="Header__image-container">

                    </div>
                </div>
            </div>
        )
    }
}

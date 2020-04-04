import "./Header.scss"
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header__container">
                    <div className="Header__heading-container">
                        <div className="Header__text-container">
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
                                <div class="button-wrap facebook">
                                    <div class="button-inner-wrap">
                                        <i class="icon-linkedin inactive"></i>
                                        <i class="icon-linkedin active"></i>
                                    </div>
                                </div>
                                <div class="button-wrap facebook">
                                    <div class="button-inner-wrap">
                                        <i class="icon-github inactive"></i>
                                        <i class="icon-github active"></i>
                                    </div>
                                </div>
                                <div class="button-wrap facebook">
                                    <div class="button-inner-wrap">
                                        <i class="icon-google-plus inactive"></i>
                                        <i class="icon-google-plus active"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Header__image-container">

                    </div>
                </div>
            </div>
        )
    }
}

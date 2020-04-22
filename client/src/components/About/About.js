import React, { Component } from 'react'
import "./About.scss";
import laithImageOne from "../../assets/Images/laith-side-1.jpg"

export default class About extends Component {
    render() {
        return (
            <div className="About" id="about">
                <div className="About__container">
                    <h3 className="About__heading">
                        About
                    </h3>
                    <div className="About__line"/>
                    <div className="About__about-container">
                        <div className="About__img-section-container">
                            <div className="About__img-container"/>
                        </div>
                        <div className="About__text-container">
                            <h3 className="About__text-heading">
                                Who even is this guy?
                            </h3>
                            <p className="About__text-description">
                                So glad you asked! This guy's name is Laith Harb and he is a full-stack developer. 
                                He went to Queens' and graduated with a Biochemistry degree and then attended and 
                                completed BrainStation's Web Development diploma program. He is comfortable 
                                with using TypeScript, React, Redux, GraphQL, Prisma, Apollo, Node, Express, MongoDB, and MySQL. You 
                                should check out his projects!
                                <br/>
                                <br/>
                                Aside from coding, Laith also loves to play chess, play basketball, 
                                and workout. The picture to the left is a rare image of beardless 
                                Laith. In the wild, you won't see Laith in this form.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

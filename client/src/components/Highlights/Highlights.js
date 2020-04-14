import React, { Component } from 'react'
import "./Highlights.scss"
import dribbleDribbleDribble from "../../assets/Videos/basketballHandles.mp4"
import handsomeMe from "../../assets/Videos/handsomeMeHooping.mp4"

export default class Highlights extends Component {
    render() {
        return (
            <div className="Highlights">
                <div className="Highlights__container">
                    <div className="Highlights__highlight-container">
                        <div className="Highlights__text-container">
                            <h2 className="Highlights__heading">
                                Dribble, Dribble, Dribble...
                            </h2>
                            <p className="Highlights__description">
                                That's the only thing my coach use to say I do in a game.
                                Well coach... It clearly worked this time! My defender was 
                                was so confused by my ball handling wizardry that they completely froze.
                                Easy buckets!
                            </p>
                        </div>
                        <div className="Highlights__video-container">
                            <iframe src={dribbleDribbleDribble} frameborder="0" className="Highlights__iframe">
                            
                            </iframe>
                        </div>
                    </div>

                    <div className="Highlights__highlight-container Highlights__highlight-container--two">
                        <div className="Highlights__video-container">
                            <iframe src={handsomeMe} frameborder="0" className="Highlights__iframe">
                            
                            </iframe>
                        </div>
                        <div className="Highlights__text-container Highlights__text-container--two">
                            <h2 className="Highlights__heading">
                                Dribble, Dribble, Dribble...
                            </h2>
                            <p className="Highlights__description">
                                That's the only thing my coach use to say I do in a game.
                                Well coach... It clearly worked this time! My defender was 
                                was so confused by my ball handling wizardry that they completely froze.
                                Easy buckets!
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

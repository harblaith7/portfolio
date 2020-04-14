import React, { Component } from 'react'
import "./HighLightsPage.scss"
import Header from "../../components/HeaderHighlights/HeaderHighlights"
import Highlights from "../../components/Highlights/Highlights"

export default class HighLightsPage extends Component {
    render() {
        return (
            <div className="HighLightsPage">
                <Header/>
                <Highlights/>
            </div>
        )
    }
}

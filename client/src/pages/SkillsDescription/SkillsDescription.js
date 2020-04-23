import React, { Component } from 'react'
import "./SkillsDescription.scss"
import Nav from "../../components/Nav/Nav"
import {HashLink as Link} from "react-router-hash-link"

export default class SkillsDescription extends Component {

    constructor(props){
        super(props)
        this.state = {
            skills : [
                {
                    name: "TypeScript",
                    id: "typescript",
                    intro: (
                        <>
                            For most of my projects so far, I've been using plain JavaScript with React. However, as I kept hearing about 
                            how marvolous TypeScript is from countless YouTubers and as I observed how common TypeScript was in the industry, 
                            I decided that I should learn it.
                        </>
                    ),
                    knowledge: (
                        <>
                            To start, I understand the difference between type <span>annotation</span> and type <span>inference</span>. I understand 
                            when I should annotate and when I should leave it up to TypeScript. For instance, I alway annotate my function parameters and their expected 
                            return type. Furthermore, I understand how to use <span>generics</span> and how to structure classes for <span>reusable code</span>.
                        </>
                    ),
                    projects: (
                        <>
                            So far I haven't built much projects with TypeScript. I did however built a <a href="https://github.com/harblaith7/web-framework-with-typescript">web framework</a> entirely in TypeScript as a code along 
                            for when I was first learning it. You can check out the code by viewing my GitHub. After I complete learning GraphQL, I intend to build 
                            a <span>calorie application</span> with TypeScript, React and GraphQL.
                        </>
                    )
                },
                {
                    name: "React",
                    id: "react",
                    intro: (
                        <>
                            React is by far my most used technology stack. I absolutely love it! It was the first library I've learned 
                            and I haven't looked back since. All my projects implement React with other technology stacks. In the furture,
                            I aim to exclusively use TypeScript, and not JavaScript, with React.
                        </>
                    ),
                    knowledge: (
                        <>
                            I know a lot! I understand the whole <span>component structure</span> and how they keep our code clean, organized, and reusable.
                            I also understand how to use <span>React Router</span> to create a multi page application. Furthermore, I understand how to use all 
                            the important <span>life cycle methods</span> such as componentDidMount and componentDidUpdate. I can also mock these methods 
                            with <span>React hooks</span> if we are utilizing function based components. Lastly, I know how to centralize state 
                            with <span>context</span>, though I mostly use <span>Redux</span>.
                        </>
                    ),
                    projects: (
                        <>
                            Again, every project I've built so far uses React for its front-end. You can check them out by going 
                            to the project section on my portfolio.
                        </>
                    )
                },
                {
                    name: "Redux",
                    id: "redux",
                    intro: (
                        <>
                            React is by far my most used technology stack. I absolutely love it! It was the first library I've learned 
                            and I haven't looked back since. All my projects implement React with other technology stacks. In the furture,
                            I aim to exclusively use TypeScript, and not JavaScript, with React.
                        </>
                    ),
                    knowledge: (
                        <>
                            I know a lot! I understand the whole <span>component structure</span> and how they keep our code clean, organized, and reusable.
                            I also understand how to use <span>React Router</span> to create a multi page application. Furthermore, I understand how to use all 
                            the important <span>life cycle methods</span> such as componentDidMount and componentDidUpdate. I can also mock these methods 
                            with <span>React hooks</span> if we are utilizing function based components. Lastly, I know how to centralize state 
                            with <span>context</span>, though I mostly use <span>Redux</span>.
                        </>
                    ),
                    projects: (
                        <>
                            Again, every project I've built so far uses React for its front-end. You can check them out by going 
                            to the project section on my portfolio.
                        </>
                    )
                },
            ],
            currentSkill : {}
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id

        this.state.skills.map(skill => {
            if(skill.id === id){
                this.setState({
                    currentSkill : skill
                })
            }
        })

    }

    render() {
        const {name, intro, knowledge, projects} = this.state.currentSkill
        return (
            <div className="SkillsDescription">
                <Nav/>
                <div className="SkillsDescription__container">
                    <h2 className="SkillsDescription__header">
                        {name}
                    </h2>
                    <p className="SkillsDescription__description">
                        {intro}
                    </p>
                    <h3 className="SkillsDescription__sub-header">
                        What I know 
                    </h3>
                    <p className="SkillsDescription__description">
                        {knowledge}
                    </p>
                    <h3 className="SkillsDescription__sub-header">
                        Projects with {name}
                    </h3>
                    <p className="SkillsDescription__description">
                        {projects}
                    </p>
                    
                </div>
                    <Link className="SkillsDescription__go-back" to="/#skills">
                        Go Back
                    </Link>
            </div>
        )
    }
}

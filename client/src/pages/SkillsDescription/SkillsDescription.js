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
                            For most of my projects so far, I've been using plain JavaScript with React. However, as I kept hearing about how marvelous TypeScript is from countless YouTubers, and as I observed how common TypeScript was in the industry, I decided that I should learn it.
                        </>
                    ),
                    knowledge: (
                        <>
                            To start, I understand the difference between type <span>annotation</span> and type <span>inference</span>. I understand 
                            when I should annotate and when I should leave it up to TypeScript. For instance, I always annotate my function parameters and their expected 
                            return type. Furthermore, I understand how to use <span>generics</span> and how to structure classes for <span>reusable code</span>.
                        </>
                    ),
                    projects: (
                        <>
                            So far I haven't built many projects with TypeScript. I did however built a <a href="https://github.com/harblaith7/web-framework-with-typescript">web framework</a> entirely in TypeScript as a code along 
                            for when I was first learning it. You can check out the code by viewing my GitHub. After I complete learning GraphQL, I intend to build 
                            a <span>calorie application</span> with TypeScript, React and, GraphQL.
                        </>
                    )
                },
                {
                    name: "React",
                    id: "react",
                    intro: (
                        <>
                            React is by far my most used technology stack. I absolutely love it! It was the first library I've learned 
                            and I haven't looked back since. All my projects implement React with other technology stacks. In the future,
                            I aim to exclusively use TypeScript, and not JavaScript, with React.
                        </>
                    ),
                    knowledge: (
                        <>
                            I know a lot! I understand the whole <span>component structure</span> and how they keep our code clean, organized, and reusable.
                            I also understand how to use <span>React Router</span> to create a multi-page application. Furthermore, I understand how to use all 
                            the important <span>life cycle methods</span> such as componentDidMount and componentDidUpdate. I can also mock these methods 
                            with <span>React hooks</span> if we are utilizing function-based components. I know how to centralize state 
                            with <span>context</span>, though I mostly use <span>Redux</span>. Lastly, I know how to test my React components with 
                            <span> react-testing-library </span> and <span>Jest</span>
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
                            Redux was probably one of the most complicated technologies I learned. It was so difficult to 
                            finally get past all the new terminology and complex initial setup. However, once I passed that point, 
                            I realized how powerful a tool it can be.
                        </>
                    ),
                    knowledge: (
                        <>
                            I understand how to use Redux to <span>centralize</span> important information in a central state. I also understand 
                            how <span>reducers</span> and <span>action creators</span> work together, and how to  
                            integrate them both into a component. I'm comfortable with using the <span>Redux thunk</span> middleware
                            to write action creators that return a function instead of an action.
                        </>
                    ),
                    projects: (
                        <>
                            So far I've used Redux in both <span>Blumber</span> and <span>Greatrr</span> to store authentication 
                            data and other pieces of information that are used by many components.
                        </>
                    )
                },
                {
                    name: "GraphQL",
                    id: "graphql",
                    intro: (
                        <>
                            I am currently learning GraphQL and I am absolutely loving it! It's such an amazing alternative than the 
                            conventional REST API. I use <span>Prisma</span> as my ORN and <span>Apollo Client</span> for state 
                            management.
                        </>
                    ),
                    knowledge: (
                        <>
                            I know how to write <span>schemas</span> and <span> queries</span> as well as <span>mutations</span> and 
                            <span> subscriptions</span>. Furthermore, I know how to connect GraphQL to a <span>database </span> by 
                            using <span>Prisma</span> as my ORN. I am also comfortable with <span>authentication</span> in GraphQL and <span>testing </span>
                            my GraphQL app.
                        </>
                    ),
                    projects: (
                        <>
                            I haven't used GraphQL in any of my projects yet, but that will change when I start my calorie application, which will 
                            utilize TypeScript, React, GraphQL, and Node.
                        </>
                    )
                },
                {
                    name: "Node",
                    id: "node",
                    intro: (
                        <>
                            Node was my first introduction to the world of back-end development. I started with Node as I was already very comfortable 
                            with using JavaScript, but in the future, I want to learn how to use <span>Rails</span> and <span>Django</span>.
                        </>
                    ),
                    knowledge: (
                        <>
                            I understand that Node is a <span>non-blocking I/O</span> that works via a mechanism called an <span>event loop</span>.
                        </>
                    ),
                    projects: (
                        <>
                            All my full-stack projects use Node and Express for their back-end. In Blumber is stored my data directly 
                            in my backend via JSON files, but in Greatrr, I stored them in MongoDB.
                        </>
                    )
                },
                {
                    name: "Express",
                    id: "express",
                    intro: (
                        <>
                            I always use the Express library when using Node. It makes my life so much easier. In the future, however, I'd love 
                            to dabble into <span>Rails</span> and <span>Django</span>.
                        </>
                    ),
                    knowledge: (
                        <>
                            I understand how to organize my back-end files and folders so that they meet common conventions. I can 
                            write all kinds of different <span>routes</span> to create a full-on <span> CRUD</span> application.
                            I also write <span>middleware</span> functions to execute code before it reaches the final callback.
                            A common middleware I use checks if a user is even authenticated before getting access to a specific 
                            route.
                        </>
                    ),
                    projects: (
                        <>
                            When I use Node, I am also using Express. So far, I used Express in both Blumber and Greatrr. Check them 
                            out by going to my projects section.
                        </>
                    )
                },
                {
                    name: "MongoDB",
                    id: "mongodb",
                    intro: (
                        <>
                            So far, MongoDB has been my database of choice, though I am trying to migrate to MySQL. It's pretty 
                            easy to use with <span>Mongoose</span> as my ORN.
                        </>
                    ),
                    knowledge: (
                        <>
                            I understand how to create <span>documents</span>. To link documents together, I either embed them as <span>subdocuments </span>
                            or <span>reference</span> them via ids. I understand how to use Mongoose to perform all the necessary <span>CRUD</span> operations.
                            I also know how to store and retrieve user authentication information with Mongo.
                        </>
                    ),
                    projects: (
                        <>
                            I used Mongo & Mongoose in both Blumber and Greatrr. In Blumber, I only used Mongo for storing and retrieving user 
                            information, but in Greatrr, I stored all my data within it. Check these projects out by going to the project section.
                        </>
                    )
                },
                {
                    name: "MySQL",
                    id: "mysql",
                    intro: (
                        <>
                            I've been primarily using MongoDB as my database, but I am trying to migrate to MySQL. I like the 
                            concept of organizing data in tables and then referencing them to other tables.
                        </>
                    ),
                    knowledge: (
                        <>
                            I understand how to create databases and tables. I am also capable of performing all the <span>CRUD</span> operations.
                            I can write complex queries that utilize <span>logical operators</span>. Lastly, I know how and when to implement 
                            <span> many to many</span> and <span>one to many</span> relationships.
                        </>
                    ),
                    projects: (
                        <>
                            I haven't built any projects with MySQL thus far, but I did use it to manipulate a large set of Instagram data.
                            I wrote complex queries to fetch data based on a specific criteria.
                        </>
                    )
                },
                {
                    name: "PostgreSQL",
                    id: "postgresql",
                    intro: (
                        <>
                            I've only used this once, but it seems similar to MySQL. I really just needed another card to make the 
                            website look nice.
                        </>
                    ),
                    knowledge: (
                        <>
                            If it's similar to MySQL then I know a fair amount.
                        </>
                    ),
                    projects: (
                        <>
                            As a means of learning GraphQL, I connected Prisma to PostgreSQL.
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
            <div className="SkillsDescription" id="skill">
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

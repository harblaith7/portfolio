import React, { Component } from 'react';
import "./SideNav.scss";
import {motion} from "framer-motion"
import closeBtn from "../../assets/Images/close-btn.svg"
import {Link} from "react-router-dom"

const variants = {
    open: { x: 0},
    closed: { x: "110%", transition: {delay: 0.5}}
}

const liVariants = {
    open: { y: 0, opacity: 1},
    closed: { y: -20, opacity: 0}  
}

const ulVariants = {
    open: { 
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
                when: "afterChildren"
            }
          },
    closed: {}  
}


export default class Nav extends Component {

    constructor(props){
        super(props)
        this.state = {
            links : [
                {name : "Home", id: "home"},
                {name : "About", id: "about"},
                {name : "Skills", id : "skills"},
                {name: "Projects", id : "projects"},
                
            ]
        }
    }

    displayLinks = () => {
        return this.state.links.map(link => {
            return (
                <motion.li 
                    className="SideNav__list-item"
                    variants={liVariants}
                >
                    <a href={`#${link.id}`} className="SideNav__link" onClick={this.props.toggleNav}>
                        {link.name}
                    </a>
                </motion.li>
            )
        })
    }

    render() {

        const {isNavOpen, toggleNav} = this.props;

        return (
            <motion.nav 
                className="SideNav"
                variants={variants}
                initial="closed"
                animate={isNavOpen ? "open" : "closed"}
                transition={{damping: 900}}
            >
                <button onClick={toggleNav} className="SideNav__close-btn">
                    <img src={closeBtn}/>
                </button>
                <motion.ul 
                    className="SideNav__list" 
                    variants={ulVariants}
                >
                    {this.displayLinks()}
                    <motion.li 
                        className="SideNav__list-item"
                        variants={liVariants}
                    >   
                        <Link to="/highlights" className="SideNav__link" onClick={this.props.toggleNav}>
                            Highlights
                        </Link>
                    </motion.li>
                </motion.ul>
            </motion.nav>
        )
    }
}

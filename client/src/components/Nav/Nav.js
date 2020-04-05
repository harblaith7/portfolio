import React, { Component } from 'react';
import "./Nav.scss";
import {motion} from "framer-motion"

const variants = {
    open: { x: 0},
    closed: { x: "-110%", transition: {delay: 0.5}}
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
                "Home",
                "About",
                "Skills",
                "Projects",
                "Contact"
            ]
        }
    }

    displayLinks = () => {
        return this.state.links.map(link => {
            return (
                <motion.li 
                    className="Nav__list-item"
                    variants={liVariants}
                >
                    <a href="" className="Nav__link">
                        {link}
                    </a>
                </motion.li>
            )
        })
    }

    render() {

        const {isNavOpen, toggleNav} = this.props;

        return (
            <motion.nav 
                className="Nav"
                variants={variants}
                initial="closed"
                animate={isNavOpen ? "open" : "closed"}
                transition={{damping: 900}}
            >
                <button onClick={toggleNav}>close</button>
                <motion.ul 
                    className="Nav__list" 
                    variants={ulVariants}
                >
                    {this.displayLinks()}
                </motion.ul>
            </motion.nav>
        )
    }
}

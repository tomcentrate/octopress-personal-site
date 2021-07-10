import React from "react";
import { Link } from "gatsby";

function NavigationBar({props}) {
    return <div className="sidebar">
        <nav className="sidebar-nav">
            <div className="sidebar-item"><p>Software development for Everyone else</p></div>
            <Link className="sidebar-nav-item" to="/resume">Resume</Link>
            <Link className="sidebar-nav-item" to="/projects">Projects</Link>
            <Link className="sidebar-nav-item" to="/blog">Blog</Link>
            <span className="sidebar-nav-item">Outer Links</span>
            <a href="https://github.com/tomcentrate" className="sidebar-nav-item">Github</a>
            <a href="https://www.linkedin.com/in/tommy-lee-a23ba935/" className="sidebar-nav-item">LinkedIn</a>
        </nav>
    </div>
}

export default NavigationBar
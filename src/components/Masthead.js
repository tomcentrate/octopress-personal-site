import React from "react";
import { Link } from "gatsby";

function Masthead(data) {
    return <div className="masthead">
        <div className="container">
            <h3 className="masthead-title">
                <Link to="/" title="Home">Tommy Lee</Link>
                <small>Software development for everyone else</small>
            </h3>
        </div>
    </div>
}

export default Masthead
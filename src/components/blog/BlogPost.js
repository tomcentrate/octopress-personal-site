import React from "react";

export default ({children, date, dangeroushtml}) => {
    return (<article className="post">
        {children}
        <span className="post-meta">
            <span className="post-date">{date}</span>
        </span>
        <div dangerouslySetInnerHTML={{__html: dangeroushtml }} />
    </article>)
}
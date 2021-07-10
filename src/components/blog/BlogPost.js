import React from "react";

function BlogPost(children, date, dangeroushtml) {
    return (<article className="post">
        {children}
        <span className="post-meta">
            <span className="post-date">{date}</span>
        </span>
        <div dangerouslySetInnerHTML={{__html: dangeroushtml }} />
    </article>)
}

export default BlogPost
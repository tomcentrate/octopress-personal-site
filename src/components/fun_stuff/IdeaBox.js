import React from "react"
const IdeaBox = ({...props}) => {
    let ideaType = props.type ?? '';
    ideaType += ' idea';
    ideaType += (props.completed ? ' completed ': ' ');
    ideaType += (props.abandoned ? ' abandoned ': ' ');
    return (
        <div className="idea_box">
            <div className={ideaType}>
                <span>{props.idea}</span>
            </div>

        </div>
    )
}

export default IdeaBox
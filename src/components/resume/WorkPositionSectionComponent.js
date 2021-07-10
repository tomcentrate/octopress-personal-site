import React from "react";
import {item, item_position, item_dates, item_highlights} from "../../pages/resume.module.css";
function WorkPositionSectionComponent({job}) {
    return <section className={item}>
        <header>
            <h3>{job.company ?? job.organization ?? "Unknown"}</h3>
        </header>
        <span className={item_position}>{job.position}</span>
        <span className={item_dates}>{job.startDate}</span>
        <span className={item_dates}> - {job.endDate ?? "Present"}</span>
        <div className="summary">{job.summary}</div>
        <ul className={item_highlights}>
            {job.highlights.map((highlight) => {
                return (<li>{highlight}</li>)
            })}
        </ul>
    </section>
}

export default WorkPositionSectionComponent
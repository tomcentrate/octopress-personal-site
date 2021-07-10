import React from "react";
import styles from "../../pages/resume.module.css";
export default function WorkPositionSectionComponent(job) {
    return <section className={styles.item}>
        <header>
            <h3>{job.company ?? job.organization ?? "Unknown"}</h3>
        </header>
        <span className={styles.item_position}>{job.position}</span>
        <span className={styles.item_dates}>{job.startDate}</span>
        <span className={styles.item_dates}> - {job.endDate ?? "Present"}</span>
        <div className="summary">{job.summary}</div>
        <ul className={styles.item_highlights}>
            {job.highlights.map((highlight) => {
                return (<li>{highlight}</li>)
            })}
        </ul>
    </section>
}
import React from "react";
import ResumeData from "../resume";
import styles from "./resume.module.css";
import WorkPositionSectionComponent from "../components/resume/WorkPositionSectionComponent";

export default () => {
    const resume = ResumeData;
    return (
        <div className={styles.resume}>
            <section className={styles.heading}>
                <header>
                    <h1>{resume.basics.name}</h1>
                    <div className="contact">
                        <span className={styles.contact_detail}>
                            {resume.basics.email}
                        </span>
                        <span className={styles.contact_detail}>
                            {resume.basics.phone}
                        </span>
                        <span className={styles.contact_detail}>
                            {resume.basics.website}
                        </span>
                    </div>
                </header>
            </section>
            <section className="summary">
                <p>{resume.basics.summary}</p>
            </section>
            <section className={styles.skills}>
                {resume.skills.map(({ name, keywords }) => (
                    <div className={styles.skills_item}>
                        <div className={styles.skills_item_name}>
                            {name}
                        </div>
                        <div className={styles.skills_item_keywords}>
                            {keywords.join(', ')}
                        </div>
                    </div>
                ))}
            </section>
            <section className="experience">
                <h2>Work Experience</h2>
                {resume.work.map((job) => {
                    return <WorkPositionSectionComponent job={job}/>
                })}
            </section>
            <section className="experience">
                <h2>Volunteer</h2>
                {resume.volunteer.map((job) => {
                   return <WorkPositionSectionComponent job={job} />
                })}
            </section>
            <section className="education">
                <h2>Education</h2>
                {resume.education.map((school) => {
                    return (
                        <div className="item">
                            <header><h3 className="name">{school.institution}</h3></header>
                            <span className={styles.item_dates}>{school.startDate}</span>
                            <span className={styles.item_dates}> - {school.endDate ?? "Present"}</span>
                            <div className="qualification">
                                <span className="studyType">{school.studyType}</span>
                                <span className="area"> - {school.area}</span>
                            </div>
                        </div>
                    )
                })}
            </section>
        </div>
    );
}
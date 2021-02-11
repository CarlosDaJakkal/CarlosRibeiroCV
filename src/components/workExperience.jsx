import React, { Component } from "react";

const WorkExperience = () => {
    const list = [
        {
            position: "Development Team Lead",
            organization: "Switch Studios, Ipswich, United Kingdom",
            date: "2019/07 -> Current",
            list: [
                "Manage a team of developers across multiple product streams (including Job Performance, Skills Development & Personal Development).",
                "Coaching & Mentoring of development team.",
                "Define strategies for the development of projects to streamline new development and maintenance of products already in production.",
                "Work closely with Product Managers and development teams to set refined / achievable deadlines.",
                "Communicate effectively with Product Managers to ensure project plans are kept up to date and release schedules aren't impacted.",
                "Communicate any changes in stakeholder or organization focus to the relevant development teams.",
                "Uphold agreed technical processes and work with developers to implement framework paradigms where applicable.",
                "Assist with planning of project deliverables.",
                "Troubleshooting integration with external dependencies & projects.",
                "Scrum Master the project once development commences, including all Agile/SCRUM ceremonies.",
                "User Story management (including creation of tickets) on Jira for sprint refinement & sprint planning ceremonies.",
                "Development environment maintenance including game installation, troubleshooting, stability, reliability and regeneration."
            ]
        },
        {
            position: "Client Developer",
            organization: "Switch Studios, Ipswich, United Kingdom",
            date: "2018/09 -> 2019/06",
            list: [
                "Facilitate the implementation of Agile/SCRUM methodologies within development teams.",
                "Work as part of a cross-functional development team to produce casino table games using TypeScript / JavaScript, HTML, & CSS.",
                "Work with other developers to minimize code-replication and optimize productivity.",
                "Standardize best practices for developers across multiple teams.",
                "Establish processes to help cross-functional teams improve communication and productivity.",
                "Work with teams to refine & estimate project timelines and ensure they are adhered to.",
                "Work with the Art Lead to re-brand games clients to provide the best User Experience.",
                "Work with artists on technical implementation of complex designs.",
                "Work with external teams to ensure clients being developed integrate correctly with external systems.",
                "Facilitate better communication across disciplines within development teams.",
                "Evolve and improve team process to achieve the highest possible productivity.",
                "Production Support of all products/games"
            ]
        },
        {
            position: "Application Analyst Programmer",
            organization: "ABSA Group, Johannesburg, South Africa",
            date: "2017/01 -> 2018/06",
            list: [
                "Programming Tools: MicroFocus Net Express Cobol, JCL, TSO, Shandi, Crystal Reports and OS390",
                "Involved in Business discussions around possible Project solutions",
                "Provide effective communication between Business and IT",
                "Systems Analysis & Design, Planning, System Development, Maintenance and Enhancements of both online and batch environments",
                "Follow both a Waterfall and Agile SDLC process, dependent on project allocation.",
                "Setup and/or Participate in JAD Sessions",
                "Software Solution design and development",
                "Implementation of Software Solutions",
                "Investigating and solving problems",
                "Production system standby",
                "Complete understanding of the overall system function and thorough working knowledge of the software environment"
            ]
        },
        {
            position: "Application Analyst Programmer",
            organization:
                "First National Bank (FNB), Johannesburg, South Africa",
            date: "2006/06 -> 2016/12",
            list: [
                "Programming Tools: Cobol/IMS, Hogan, JCL, TSO and OS390",
                "Involved in Business discussions around possible Project solutions",
                "Provide effective communication between Business and IT",
                "Systems Analysis & Design, Planning, System Development, maintenance and enhancements of both online and batch environments",
                "Follow relevant SDLC processes (currently Waterfall methodology)",
                "Setup and/or Participate in JAD Sessions",
                "Software Solution design and development",
                "Implementation of Software Solutions",
                "Investigating and solving problems",
                "Production system standby",
                "Prioritization and allocation of team work to be done",
                "Mentorship of junior developers within the team"
            ]
        }
    ];

    return (
        <div className="row">
            <div className="col-1">
                <img
                    className="img-fluid"
                    src="work_exp.png"
                    alt="Work Experience"
                />
            </div>
            <div className="col-11">
                <article className="blog-post">
                    <h2 className="blog-post-title">Work Experience</h2>
                    <ul>
                        {list.map((item, i) => (
                            <li key={i}>
                                <h3>{item.position}</h3>
                                <p className="font-italic font-weight-light">
                                    <u>{item.organization}</u>
                                </p>
                                <p>{item.date}</p>
                                <ul>
                                    {item.list.map((listItem, j) => (
                                        <li key={j}>{listItem}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </article>
            </div>
        </div>
    );
};

export default WorkExperience;

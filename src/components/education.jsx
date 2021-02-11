import React, { Component } from "react";

const Education = () => {
    const list = [
        {
            qualification: "Master of Engineering: Software Engineering",
            institution: "University of Witwatersrand (WITS)",
            date: "2013/02 -> 2015/12"
        },
        {
            qualification:
                "Bachelor of Science: Computer Science (Software Engineering)",
            institution: "University of South Africa (UNISA)",
            date: "2008/10 -> 2012/12"
        },
        {
            qualification: "High School Diploma",
            institution: "Forest High School",
            date: "1995/01 -> 1999/12"
        }
    ];

    return (
        <div className="row">
            <div className="col-1">
                <img className="img-fluid" src="edu.png" alt="Education" />
            </div>
            <div className="col-11">
                <article className="blog-post">
                    <h2 className="blog-post-title">Education</h2>
                    <ul>
                        {list.map((item, i) => (
                            <li key={i}>
                                <p>{item.qualification}</p>
                                <p>{item.institution}</p>
                                <p>{item.date}</p>
                            </li>
                        ))}
                    </ul>
                </article>
            </div>
        </div>
    );
};

export default Education;

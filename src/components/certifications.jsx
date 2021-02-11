import React, { Component } from "react";

const Certifications = () => {
    const list = [
        {
            qualification: "Certified Scrum Master",
            institution: "Scrum Alliance",
            date: "2019"
        }
    ];

    return (
        <div className="row">
            <div className="col-1">
                <img
                    className="img-fluid"
                    src="certs.png"
                    alt="Certifications"
                />
            </div>
            <div className="col-11">
                <article className="blog-post">
                    <h2 className="blog-post-title">Certifications</h2>
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

export default Certifications;

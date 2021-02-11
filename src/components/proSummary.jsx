import React, { Component } from "react";

const ProSummary = () => {
    const list = [
        "System & Program Analysis, Design, Development, Maintenance & Enhancements",
        "Project & Team Resource Planning",
        "Coaching, Mentorship, Assisting & Training the Team",
        "Implementing large/medium/small development projects",
        "Provide Business/Help Centre with Support to end-user enquiries",
        "Provide communication and understanding between Business and IT",
        "Provide effective solutions to Business Requirements"
    ];

    return (
        <div className="row">
            <div className="col-1">
                <img
                    className="img-fluid"
                    src="pro_summ.png"
                    alt="Professional Summary"
                />
            </div>
            <div className="col-11">
                <article className="blog-post">
                    <h2 className="blog-post-title">Professional Summary</h2>
                    <p>
                        A dedicated and enthusiastic Software Engineer who
                        enjoys being part of a hard-working team. Able to grasp
                        new ideas and concepts easily, thereby engineering
                        innovative and creative solutions to problems in the
                        domain. Possess a strong ability to perform effectively
                        in high pressure environments and the ability to meet
                        the tightest of deadlines.
                    </p>
                    <p>
                        Currently part of a game development studio, working on
                        Front-end Client development.
                    </p>
                    <p>
                        Background in Mainframe Development (Hogan Cobol), with
                        focus on Channel architecture, Proxy Architecture and
                        Digital Banking (APP, Mobile and Online Banking).
                    </p>
                    <h4 className="font-weight-bold">SUMMARY OF EXPERIENCE</h4>
                    <ul>
                        {list.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </article>
            </div>
        </div>
    );
};

export default ProSummary;

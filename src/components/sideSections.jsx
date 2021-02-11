import React, { Component } from "react";
import SideSection from "./sideSection";
import Contact from "./contact";

class SideSections extends Component {
    state = {
        sections: [
            {
                id: 1,
                imageUrl: "attr.png",
                title: "Attributes",
                list: [
                    "Friendly",
                    "Great work ethic",
                    "Trustworth",
                    "Dependable",
                    "Loyal"
                ]
            },
            {
                id: 2,
                imageUrl: "key_str.png",
                title: "Key Strengths",
                list: [
                    "Decision making",
                    "Analytical thinker",
                    "Results driven",
                    "Attention to detail",
                    "Team player",
                    "Interpersonal skills",
                    "Intrinsic motivation",
                    "Collaboration",
                    "Resilient",
                    "Dependable"
                ]
            },
            {
                id: 3,
                imageUrl: "train.png",
                title: "Training",
                list: [
                    "Effective Communication",
                    "Emotional Intelligence",
                    "Kanban",
                    "Scrum",
                    "Insights",
                    "Negotiation Techniques",
                    "Team Leader Academy",
                    "GDPR"
                ]
            },
            {
                id: 4,
                imageUrl: "tech.png",
                title: "Technology",
                list: [
                    "JavaScript",
                    "Typescript",
                    "Pixi.js",
                    "HTML5",
                    "SourceTree",
                    "GitLab",
                    "TeamCity",
                    "MongoDB",
                    "SQL",
                    "Cobol",
                    "DB2",
                    "JCL",
                    "TSO",
                    "JIRA",
                    "Confluence",
                    "Microsoft Office",
                    "Microsoft Teams"
                ]
            },
            {
                id: 5,
                imageUrl: "lang.png",
                title: "Languages",
                list: ["English", "Afrikaans", "Portuguese"]
            }
        ]
    };

    render() {
        return (
            <div>
                <Contact />
                {this.state.sections.map((section) => (
                    <SideSection key={section.id} section={section} />
                ))}
            </div>
        );
    }
}

export default SideSections;

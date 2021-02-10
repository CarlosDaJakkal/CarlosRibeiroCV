import React, { Component } from "react";
import MainSection from "./mainSection";

class MainSections extends Component {
    state = {
        sections: [
            {
                id: 1,
                imageUrl: "pro_summ.png",
                title: "Professional Summary"
            },
            {
                id: 2,
                imageUrl: "work_exp.png",
                title: "Working Experience"
            },
            {
                id: 3,
                imageUrl: "edu.png",
                title: "Education"
            },
            {
                id: 4,
                imageUrl: "certs.png",
                title: "Certifications"
            }
        ]
    };

    render() {
        return (
            <div>
                {this.state.sections.map((section) => (
                    <MainSection key={section.id} section={section} />
                ))}
            </div>
        );
    }
}

export default MainSections;

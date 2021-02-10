import React, { Component } from "react";
import MainSection from "./mainSection";

class MainSections extends Component {
    state = {
        sections: [
            {
                id: 1,
                imageUrl: "logo192.png",
                title: "Professional Summary"
            },
            {
                id: 2,
                imageUrl: "logo192.png",
                title: "Working Experience"
            },
            {
                id: 3,
                imageUrl: "logo192.png",
                title: "Education"
            },
            {
                id: 4,
                imageUrl: "logo192.png",
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

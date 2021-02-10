import React, { Component } from "react";
import SideSection from "./sideSection";

class SideSections extends Component {
    state = {
        sections: [
            {
                id: 1,
                imageUrl: "logo192.png",
                title: "Contact"
            },
            {
                id: 2,
                imageUrl: "logo192.png",
                title: "Attributes"
            },
            {
                id: 3,
                imageUrl: "logo192.png",
                title: "Key Strengths"
            },
            {
                id: 4,
                imageUrl: "logo192.png",
                title: "Training"
            },
            {
                id: 5,
                imageUrl: "logo192.png",
                title: "Technology"
            },
            {
                id: 6,
                imageUrl: "logo192.png",
                title: "Languages"
            }
        ]
    };

    render() {
        return (
            <div>
                {this.state.sections.map((section) => (
                    <SideSection key={section.id} section={section} />
                ))}
            </div>
        );
    }
}

export default SideSections;

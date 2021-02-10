import React, { Component } from "react";
import SideSection from "./sideSection";

class SideSections extends Component {
    state = {
        sections: [
            {
                id: 1,
                imageUrl: "contact.png",
                title: "Contact"
            },
            {
                id: 2,
                imageUrl: "attr.png",
                title: "Attributes"
            },
            {
                id: 3,
                imageUrl: "key_str.png",
                title: "Key Strengths"
            },
            {
                id: 4,
                imageUrl: "train.png",
                title: "Training"
            },
            {
                id: 5,
                imageUrl: "tech.png",
                title: "Technology"
            },
            {
                id: 6,
                imageUrl: "lang.png",
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

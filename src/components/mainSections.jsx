import React, { Component } from "react";
import ProSummary from "./proSummary";
import WorkExperience from "./workExperience";
import Education from "./education";
import Certifications from "./certifications";

class MainSections extends Component {
    render() {
        return (
            <div>
                <ProSummary />
                <WorkExperience />
                <Education />
                <Certifications />
            </div>
        );
    }
}

export default MainSections;

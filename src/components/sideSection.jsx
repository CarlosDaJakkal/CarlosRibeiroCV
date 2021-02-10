import React, { Component } from "react";

class SideSection extends Component {
    render() {
        return (
            <div>
                <img src={this.props.section.imageUrl} alt="" />
                <h1>{this.props.section.title}</h1>
            </div>
        );
    }
}

export default SideSection;

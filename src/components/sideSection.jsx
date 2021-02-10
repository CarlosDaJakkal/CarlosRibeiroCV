import React, { Component } from "react";

class SideSection extends Component {
    render() {
        return (
            <div className="row">
                <img
                    className="float-left"
                    src={this.props.section.imageUrl}
                    alt=""
                />
                <h1 className="float-right">{this.props.section.title}</h1>
            </div>
        );
    }
}

export default SideSection;

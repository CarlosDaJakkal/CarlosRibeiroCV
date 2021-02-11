import React, { Component } from "react";

class MainSection extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-1">
                    <img
                        className="float-left img-fluid"
                        src={this.props.section.imageUrl}
                        alt=""
                    />
                </div>
                <div className="col-11">
                    <article className="blog-post">
                        <h2 className="blog-post-title">
                            {this.props.section.title}
                        </h2>
                        <h3>Position</h3>
                        <p className="font-italic font-weight-light">
                            <u>Location</u>
                        </p>
                        <ul>
                            <li>Got a motel and built a fort out of sheets.</li>
                            <li>Your kiss is cosmic, every move is magic.</li>
                            <li>Suiting up for my crowning battle.</li>
                        </ul>
                    </article>
                </div>
            </div>
        );
    }
}

export default MainSection;

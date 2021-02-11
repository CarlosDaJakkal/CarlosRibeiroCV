import React, { Component } from "react";

class SideSection extends Component {
    render() {
        const { imageUrl, title, list } = this.props.section;

        return (
            <div className="row">
                <div className="col-2">
                    <img src={imageUrl} alt="" />
                </div>

                <div className="col-10">
                    <h4>{title}</h4>
                    <ul className="list-unstyled">
                        {list.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideSection;

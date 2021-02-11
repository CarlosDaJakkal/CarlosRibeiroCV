import React, { Component } from "react";

const PersonalDetail = () => {
    return (
        <div className="row p-4 p-md-5 mb-4 text-white rounded bg-dark">
            <div className="col-md-10 px-2 py-4">
                <h1 className="display-2 font-weight-normal">
                    Carlos M. P. Ribeiro
                </h1>
                <p className="lead font-italic my-1">Software Engineer</p>
            </div>

            <div className="col-md-2">
                <img
                    className="img-thumbnail img-fluid"
                    src="prf_pic.jpg"
                    alt="Profile Picture"
                />
            </div>
        </div>
    );
};

export default PersonalDetail;

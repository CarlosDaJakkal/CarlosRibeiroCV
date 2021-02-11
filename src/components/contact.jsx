import React, { Component } from "react";

const Contact = () => {
    return (
        <div className="row">
            <div className="col-2">
                <img src="contact.png" alt="" />
            </div>

            <div className="col-10">
                <h4>Contact</h4>
                <ul className="list-unstyled">
                    <li className="font-weight-bold"> Address </li>
                    <li>Ipswich, United Kingdom</li>
                    <li />
                    <li className="font-weight-bold"> Phone </li>
                    <li>+44 7903 601 553</li>
                    <li />
                    <li className="font-weight-bold"> Email </li>
                    <li>
                        <a href="mailto:carlosdajakkal@gmail.com">
                            carlosdajakkal@gmail.com
                        </a>
                    </li>
                    <li />
                    <li className="font-weight-bold"> LinkedIn Profile </li>
                    <li>
                        <a href="https://www.linkedin.com/in/carlos-m-p-ribeiro-4531ab24">
                            Carlos Ribeiro
                        </a>
                    </li>
                    <li />
                </ul>
            </div>
        </div>
    );
};

export default Contact;

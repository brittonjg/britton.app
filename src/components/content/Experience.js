import "./Experience.scss";

import React, { Component } from "react";

import Detail from "./Detail";

import { jobs } from "../../config/Experience";

class Experience extends Component {

    render() {
        return (
            <div className="scrolling-wrapper-flexbox" style={{ height: this.props.screenHeight }}>
                {
                    jobs.map((experience, index) => {
                        return (<Detail key={index} className="card" screenHeight={this.props.screenHeight} experience={experience} />);
                    })
                }
                <div className="footer">
                    &copy; 2019 James Britton
                </div>
            </div >
        );
    }
}

export default Experience;
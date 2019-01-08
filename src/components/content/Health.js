import React, { Component } from "react";

import Iframe from "react-iframe";

const fullHeight = {
    height: "100%",
    border: "0px",
    margin: "0px",
};

class Health extends Component {

    render() {
        return (
            <div style={{ marin: 0, height: this.props.screenHeight }}>
                <div align="center" style={fullHeight}>
                    <Iframe url="http://health.britton.app"
                        id="helpFrame"
                        className="helpClass"
                        display="initial"
                        position="relative"
                        allowFullScreen />
                </div>
            </div>
        );
    }
}

export default Health;
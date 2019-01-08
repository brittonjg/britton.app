import "./Overview.scss";

import "@material/react-button/index.scss";

import React, { Component } from "react";

import Button from "@material/react-button";
import MaterialIcon from "@material/react-material-icon";

import { isMobile, BrowserView, MobileView } from "react-device-detect";

import { analyticsClick } from "../../analytics/GA";

import Footer from "../footer/Footer";

class Overview extends Component {

    render() {
        return (
            <div className="Overview" style={{ height: this.props.screenHeight }}>
                {
                    isMobile ? (null) : (<img className="Overview-selfie" src="./images/selfie.png" alt="A selfie of me" />)
                }
                <BrowserView>
                    <div className="Overview-quote" >
                        If I waited until I was ready,<br />
                        I would be waiting a life time.
                    </div>
                </BrowserView>
                <MobileView>
                    <div className="Overview-quote" >
                        If I waited until I was ready,
                        I would be waiting a life time.
                    </div>
                </MobileView>
                <p className="Overview-blurb-bold">
                    Senior developer <span role="img" aria-label="Laptop">💻</span><br />
                    Triathlete <span role="img" aria-label="Trainer">👟</span><br />
                    Emojiuser <span role="img" aria-label="Strong">💪</span>
                </p>
                <p className="Overview-blurb">
                    Experienced software developer, specialising in Android and web technologies. Currently Mobile Lead at <a href="https://www.linkedin.com/company/eyn-limited/" target="_blank" rel="noopener noreferrer">EYN </a>
                    developing a facial indentity solution
                </p>
                <div className="buttons">
                    <Button raised={true} href="mailto:james@britton.app">
                        Message Me
                    </Button>
                    <div className="buttons-horizontal">
                        <Button
                            outlined={true}
                            icon={<MaterialIcon icon='cloud_download' />}
                            href="./resume.pdf"
                            target="_blank"
                            onClick={() => analyticsClick("Download CV")}>
                            Resumé
                        </Button>
                        <Button
                            outlined={true}
                            icon={<MaterialIcon icon='favorite' />}
                            href="http://health.britton.app"
                            target="_blank"
                            onClick={() => analyticsClick("Health")}>
                            Health
                        </Button>
                    </div>
                </div>
                <Footer />
            </div >
        )
    }

}

export default Overview;
import "./Overview.scss";

import '@material/react-button/dist/button.css';

import React, { Component } from "react";

import Button from "@material/react-button";

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
                    Tech Lead <span role="img" aria-label="Laptop">💻</span><br />
                    Triathlete <span role="img" aria-label="Trainer">👟</span><br />
                    <a href="https://www.instagram.com/torryn_toller" target="_blank" rel="noopener noreferrer">Furdad</a> <span role="img" aria-label="Dog">🐶</span><br />
                    Emojiuser <span role="img" aria-label="Strong">💪</span>
                </p>
                <p className="Overview-blurb">
                    Experienced software developer, specialising in Android and web technologies. Currently Tech Lead at <a href="https://monterosa.co" target="_blank" rel="noopener noreferrer">Monterosa </a>
                    as part of the Client Solutions team. Currently leading teams across a wide range of native application solutions.
                </p>
                <div className="buttons">
                    <Button raised={true} href="mailto:britton@hey.com">
                        Message Me
                    </Button>
                    <div className="buttons-horizontal">
                        <Button
                            outlined={true}
                            href="./resume.pdf"
                            target="_blank"
                            onClick={() => analyticsClick("Download CV")}>
                            Resumé
                        </Button>
                        <Button
                            outlined={true}
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
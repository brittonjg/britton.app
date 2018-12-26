import "./Overview.scss"

import "@material/react-button/index.scss"

import React, { Component } from "react"

import Button from "@material/react-button"
import MaterialIcon from '@material/react-material-icon';

import { analyticsClick } from "../../analytics/GA"

import Footer from "../footer/Footer"

class Overview extends Component {

    render() {
        return (
            <div className="Overview">
                <img className="Overview-selfie" src="./images/selfie.jpeg" alt="A selfie of me" />
                <div className="Overview-quote">
                    It’s not who I am underneath,
                    but what I do that defines me.
                </div>
                <p className="Overview-blurb">
                    Lorem Ipsum is simply dummy M test text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
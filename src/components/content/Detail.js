import "./Detail.scss";

import "@material/react-card/index.scss";

import React, { Component } from "react";

import { isMobile } from "react-device-detect";

import Card, {
    CardActions,
    CardActionButtons
} from "@material/react-card";

import Button from "@material/react-button";

class Detail extends Component {

    render() {
        const {
            title,
            subtitle,
            background,
            imageUrl,
            content = [],
            links = []
        } = this.props.experience

        let rightSectionHeight = this.props.screenHeight

        if (isMobile === false) {
            rightSectionHeight = this.props.screenHeight - ((this.props.screenHeight / 100) * 5)
        }

        return (
            <div className="jobWrapper" style={{
                height: rightSectionHeight,
                background
            }}>
                <Card className="jobCard" outlined>
                    {typeof imageUrl != 'undefined' ? <img alt="Example of what I created at this employer" src={imageUrl} /> : null}
                    <div className="jobTitle">{title}</div>
                    <div className="jobSubtitle">{subtitle}</div>
                    <div>
                        <ul >
                            {content.map((value, index) => {
                                return (<li key={index}>{value}</li>);
                            })}
                        </ul>
                    </div>
                    <div className="jobButtons">
                        {
                            links.length === 0 ? (null) :
                                (
                                    <CardActions fullBleed >
                                        {
                                            links.map((link, index) => {
                                                return (
                                                    <CardActionButtons key={index} >
                                                        <Button
                                                            href={link.url}
                                                            target="_blank">
                                                            {link.title}
                                                        </Button>
                                                    </CardActionButtons>
                                                );
                                            })
                                        }
                                    </CardActions>
                                )
                        }
                    </div>
                </Card>
            </div>
        );
    }
}

export default Detail;
import "./Detail.scss"

import '@material/react-card/index.scss';

import React, { Component } from 'react';

import Card, {
    CardPrimaryContent,
    CardActions,
    CardActionIcons
} from "@material/react-card";

class Detail extends Component {

    render() {
        const {
            title,
            background,
            imageUrl,
            content = []
        } = this.props.experience

        const rightSectionHeight = this.props.screenHeight - ((this.props.screenHeight / 100) * 5)

        return (
            <div className="jobWrapper" style={{
                height: rightSectionHeight,
                background: background
            }}>
                <Card className="jobCard" outlined>
                    <CardPrimaryContent>
                        <img alt="Example of what I created at this employer" src={imageUrl} />
                    </CardPrimaryContent>
                    <h1>{title}</h1>
                    <ul >
                        {content.map((value, index) => {
                            return (<li key={index}>{value}</li>)
                        })}
                    </ul>
                    <CardActions fullBleed>

                        <CardActionIcons>
                            <i>Click Me Too!</i>
                        </CardActionIcons>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default Detail;
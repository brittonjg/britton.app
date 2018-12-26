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
        } = this.props.experience

        return (
            <div className="jobWrapper" style={{
                height: '100%',
                background: background
            }}>
                <Card className="jobCard" outlined>
                    <CardPrimaryContent>
                        <img alt="Example of what I created at this employer" src={imageUrl} />
                    </CardPrimaryContent>
                    <h1>{title}</h1>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
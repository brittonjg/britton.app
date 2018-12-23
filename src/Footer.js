import "./components/App.css"

import React, { Component } from "react"

import SocialMediaIcons from "react-social-media-icons";

export const socialIcons = [
    {
        url: 'https://www.linkedin.com/in/jgbritton/',
        className: 'fa-linkedin',
    },
    {
        url: 'https://github.com/brittonjg',
        className: 'fa-github',
    },
    {
        url: 'https://www.instagram.com/britton.jg/',
        className: 'fa-instagram',
    },
    {
        url: 'https://www.last.fm/user/mcdillon',
        className: 'fa-lastfm',
    },
];

class Footer extends Component {

    render() {
        return (
            <div className="App-bottom">
                <SocialMediaIcons
                    icons={socialIcons}
                    iconSize={'1em'}
                    iconColor={'#455a64'}
                />
                <div className="App-footer">
                    <p>© 2018 James Britton</p>
                </div>
            </div>
        )
    }
}

export default Footer
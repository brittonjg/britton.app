import "./Footer.scss"

import colours from '../../Theme.scss';

import React, { Component } from "react"

import { isMobile } from "react-device-detect";

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
            <div className="Footer">
                <SocialMediaIcons
                    icons={socialIcons}
                    iconSize={isMobile ? ('1.5em') : ('2em')}
                    iconColor={colours.textColour}
                />
            </div>
        )
    }
}

export default Footer
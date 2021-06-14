import React, { Component } from 'react';
import fbIcon from './Assets/fb-icon.png';
import flicIcon from './Assets/flic-icon.png';
import gpIcon from './Assets/gp-icon.png';
import instaIcon from './Assets/insta-icon.png';
import mailIcon from './Assets/mail-icon.png';
import printIcon from './Assets/print-icon.png';
import rssIcon from './Assets/rss-icon.png';
import twitIcon from './Assets/twit-icon.png';

export default class ButtonList extends Component {
    render() {
        return (
            <div>
                <img src={fbIcon} alt="icon" />
                <img src={flicIcon} alt="icon" />
                <img src={gpIcon} alt="icon" />
                <img src={instaIcon} alt="icon" />
                <img src={mailIcon} alt="icon" />
                <img src={printIcon} alt="icon" />
                <img src={rssIcon} alt="icon" />
                <img src={twitIcon} alt="icon" />
            </div>
        )
    }
}

import React, { Component } from 'react';
import logo from './Assets/logo.png';
// import chocoPizza from './Assets/choco-pizza.png';
import fbIcon from './Assets/fb-icon.png';
import flicIcon from './Assets/flic-icon.png';
import gpIcon from './Assets/gp-icon.png';
import instaIcon from './Assets/insta-icon.png';
// import lab from './Assets/lab.png';
import mailIcon from './Assets/mail-icon.png';
import printIcon from './Assets/print-icon.png';
import rssIcon from './Assets/rss-icon.png';
// import smallLogo from './Assets/small-logo.png';
import twitIcon from './Assets/twit-icon.png';
// import vanPic from './Assets/van-pic.png';
import ButtonList from './ButtonList';

export default class ButtonList extends Component {
    render() {
        const icons = [logo, twitIcon, fbIcon, gpIcon, instaIcon, flicIcon, printIcon, rssIcon, mailIcon];
        return (
            <div>
                <img src={icons} alt='icons' />
            </div>
        )
    }
}

import React, { Component } from 'react';
import ButtonList from './ButtonList';
import logo from './Assets/logo.png';

// add icons to header
export default class Header extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt="logo" />
                <ButtonList />
            </div>
        )
    }
}

import React, { Component } from 'react';
import ButtonList from './ButtonList';
import logo from './Assets/logo.png';
import './header.css';

// add icons to header
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <img className='logo-left' src={logo} alt="logo-left" />
                <h1 className='center-header'>Delicious</h1>
                <em><br />THE BEST FOOD BLOG ON THE WEB</em>
                <ButtonList />
            </div>
        )
    }
}

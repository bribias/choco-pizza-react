import React, { Component } from 'react';
import description from './Assets/description.png';
// import vanPic from './Assets/van-pic.png';
// import logo from './Assets/logo.png';
import chocoPizza from './Assets/choco-pizza.png';
// import lab from './Assets/lab.png';
// import smallLogo from './Assets/small-logo.png';
import './body.css';

export default class Body extends Component {
    render() {
        return (
            <div>
                <img src={chocoPizza} className="choc-pizza" alt="choc-pizza" />
                <img src={description} className="description" alt='description' />
            </div>
        )
    }
}

import React, { Component } from 'react';
import description from './Assets/description.png';

export default class Body extends Component {
    render() {
        return (
            <div>
                <img src={description} alt='description' />
            </div>
        )
    }
}

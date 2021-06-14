import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <section className="footer-logo-area">
                    <span className="footer-line"></span>
                    <img className='img-inline-block' src={smallLogo} alt="small logo" />
                    <span className="footer-line"></span>
                </section>
                <div>
                    <p>Delicious Ⓒ 2021 · All rights reserved,</p>
                    <p>Proudly published by Chen and Missael,</p>
                </div>
            </footer>
        )
    }
}
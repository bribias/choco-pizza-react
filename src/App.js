import './App.css';
import React, { Component } from 'react';
import logo from './Assets/logo.png';
import chocoPizza from './Assets/choco-pizza.png';
import fbIcon from './Assets/fb-icon.png';
import flicIcon from './Assets/flic-icon.png';
import gpIcon from './Assets/gp-icon.png';
import instaIcon from './Assets/insta-icon.png';
import lab from './Assets/lab.png';
import mailIcon from './Assets/mail-icon.png';
import pintIcon from './Assets/pint-icon.png';
import printIcon from './Assets/print-icon.png';
import rssIcon from './Assets/rss-icon.png';
import smallLogo from './Assets/small-logo.png';
import twitIcon from './Assets/twit-icon.png';
import vanPic from './Assets/van-pic.png';
import { stuff1, stuff2 } from './data.js'

class ButtonList extends Component {
  render() {
    return (
      <div id="header-icon" className='float-right'>
        <img className="h-icon" alt="social media button" src={fbIcon} />
        <img className="h-icon" alt="social media button" src={twitIcon} />
        <img className="h-icon" alt="social media button" src={gpIcon} />
        <img className="h-icon" alt="social media button" src={instaIcon} />
        <img className="h-icon" alt="social media button" src={flicIcon} />
        <img className="h-icon" alt="social media button" src={pintIcon} />
        <img className="h-icon" alt="social media button" src={rssIcon} />
        <img className="h-icon" alt="social media button" src={mailIcon} />
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <header className='header-flex'>
        <div>
          <img src={logo} alt='a logo' />
          <div id="header-text" className="inline-block">
            <article id="title">Delicious</article>
            <article id="subtitle">THE BEST FOOD BLOG ON THE WEB</article>
          </div>
        </div>
        <ButtonList />
      </header>
    )
  }
}

class ThiccSpan extends Component {
  render() {
    return (
      <div className="thick">
      </div>
    )
  }
}

class IngredientItem extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.checked} readOnly /> {this.props.amount} {this.props.name}
      </li>
    )
  }
}

class IngredientList extends Component {
  render() {
    return (
      <div className="list-box">
        <ul>
          {
            stuff1.map((single, index) => <IngredientItem amount={single.amount} name={single.name} checked={single.checked} key={index} />)
          }
        </ul>
        <ul className="list">
          {
            stuff2.map((single, index) => <IngredientItem amount={single.amount} name={single.name} checked={single.checked} key={index} />)
          }
        </ul>
      </div>
    )
  }
}

class ImageSection extends Component {
  render() {
    return (
      <div><img className='pizza' src={chocoPizza} alt="some pizza" /></div>
    )
  }
}

class RecipieSection extends Component {
  render() {
    return (
      <div><p><img className='pizza' src={lab} alt="some instructions" /></p></div>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <main>
        <div>
          <p id="choco-pizz">Chocolate Pizza</p>
          <span id="date">POSTED ON MAY 13 2021 / DESERTS</span>
          <span id="print"><img src={printIcon} alt="A print button" />PRINT</span>
        </div>
        <ImageSection />
        <RecipieSection />
        <IngredientList />
        <hr />
        <div className="person-info">
          <img src={vanPic} alt="the author" className="person-pic" />
          <span className="person-intro">
            <span className="bold-big">Vanessa Stevenson</span>
            <span className="intro-text">Food Enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</span>
          </span>
          <button className="button">Share Recipe</button>
        </div>
      </main>
    )
  }
}

class Footer extends Component {
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


// PARENT FUNCTION
function App() {
  return (
    <div>
      <Header />
      <ThiccSpan />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
export default class IngredientItem extends Component {
    render() {
        return (
            <li>
                <input type="checkbox" checked={this.props.checked} readOnly /> {this.props.amount} {this.props.name}
            </li>
        )
    }
}

export default class IngredientList extends Component {
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

export default class ImageSection extends Component {
    render() {
        return (
            <div><img className='pizza' src={chocoPizza} alt="some pizza" /></div>
        )
    }
}

export defaulty class RecipieSection extends Component {
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
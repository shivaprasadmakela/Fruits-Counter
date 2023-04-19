// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    countmango: 0,
    countbanana: 0,
  }

  eatMango = () => {
    this.setState(prevState => ({countmango: prevState.countmango + 1}))
  }

  eatbanana = () => {
    this.setState(prevState => ({countbanana: prevState.countbanana + 1}))
  }

  render() {
    const {countmango, countbanana} = this.state

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">
            Bob ate <span className="span-el">{countmango}</span> mangoes{' '}
            <span className="span-el">{countbanana}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruits">
              <img
                src=" https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button className="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruits">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <button className="button" onClick={this.eatbanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

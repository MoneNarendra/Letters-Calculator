import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  changeCount = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="input-container">
            <label className="label-ele" for="enterVal">
              Enter the phrase
            </label>
            <input
              className="input-ele"
              type="text"
              placeholder="Enter the phrase"
              onChange={this.changeCount}
              id="enterVal"
            />
          </div>
          <div className="count-container">
            <p className="count-text">No.of letters: {count}</p>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="cal-image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator

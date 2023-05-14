import {Component} from 'react'
import './index.css'
// Write your code here
class Welcome extends Component {
  state = {isSubscribe: false}

  togglingElement = () => {
    this.setState(prevState => ({
      isSubscribe: !prevState.isSubscribe,
    }))
  }

  getButtonText = () => {
    const {isSubscribe} = this.state

    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="welcomeapp-conainer">
        <h1 className="welcome-heading">Welcome</h1>
        <p className="welcomeapp-para">Thank you happy learning</p>
        <button
          className="welcome-button"
          onClick={this.togglingElement}
          type="button"
        >
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome

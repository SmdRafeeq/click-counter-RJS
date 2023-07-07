import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClickMe = () => {
    this.setState(pre => ({count: pre.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="count">{count}</span>{' '}
          times
        </h1>
        <p className="desc">Click the button to increase the count!</p>
        <button className="button" type="button" onClick={this.onClickMe}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter

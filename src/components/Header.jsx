import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {

	back = () => {
    this.props.history.goBack()
  }
  forward = () => {
    this.props.history.goForward()
  }
  go = () => {
		this.props.history.go(2)
  }

	render() {
		return (
			<div>
				<h2>React Router Demo!</h2>
				<button onClick={this.back}>退回</button>
        <button onClick={this.forward}>前进</button>
        <button onClick={this.go}>Go</button>
			</div>
		)
	}
}

export default withRouter(Header)

// withRouter 可以加工一般组件，让一般组件具有路由组件所持有的API
// withRouter 的返回是一个新组件
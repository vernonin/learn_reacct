import React, { Component } from 'react'
// 引入store，用于获取redux中保存的状态
import store from '../redux/store'
// 引入activeCreator，专门用于创建active对象
import{
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../redux/count_actice'

export default class Count extends Component {

	state = {
		count: 0
	}
	// handleCount = (type) => {
	// 	return () => {
	// 		const {value} = this.selectNumber
	// 		const {count} = this.state
			
	// 		switch(type) {
	// 			case 'increment':
	// 				this.setState({count: count + parseInt(value)})
	// 				break;
	// 			case 'decrement':
	// 				this.setState({count: count - parseInt(value)})
	// 				break;
	// 			case 'incrementIfOdd':
	// 				if(count % 2 !== 0) {
	// 					this.setState({count: count + parseInt(value)})
	// 				}
	// 				break;
	// 			case 'incrementAsync':
	// 				setTimeout(() => {
	// 					this.setState({count: count + parseInt(value)})
	// 				}, 500)
	// 				break;
	// 		}
	// 	}
	// }

	// componentDidMount() {
	// 	store.subscribe(() => {
	// 		this.setState({})
	// 	})
	// }
	handleCount = (type) => {
		return () => {
			const {value} = this.selectNumber
			const count = store.getState()
			switch(type) {
				case 'increment':
					store.dispatch(createIncrementAction(parseInt(value)))
					break;
				case 'decrement':
					store.dispatch(createDecrementAction(parseInt(value)))
					break;
				case 'incrementIfOdd':
					if(count % 2 !== 0) {
						store.dispatch(createIncrementAction(parseInt(value)))
					}
					break;
				case 'incrementAsync':
					// setTimeout(() => {
					// 	store.dispatch(createIncrementAsyncAction(parseInt(value), 500))
					// }, 500)
					store.dispatch(createIncrementAsyncAction(parseInt(value), 1000))
					break;
			}
		}
	}
	render() {
		return (
			<div>
				{/* <h2>当前求和为：{this.state.count}</h2>
				<select ref={c => this.selectNumber = c} style={{width: '100px'}}>
					<option value={1}>1</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
				</select>&nbsp;
				<button onClick={this.handleCount('increment')}>+</button>&nbsp;
				<button onClick={this.handleCount('decrement')}>-</button>&nbsp;
				<button onClick={this.handleCount('incrementIfOdd')}>当前求和为奇数再加</button>&nbsp;
				<button onClick={this.handleCount('incrementAsync')}>异步加</button> */}

				<h2>当前求和为：{store.getState()}</h2>
				<select ref={c => this.selectNumber = c} style={{width: '100px'}}>
					<option value={1}>1</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
				</select>&nbsp;
				<button onClick={this.handleCount('increment')}>+</button>&nbsp;
				<button onClick={this.handleCount('decrement')}>-</button>&nbsp;
				<button onClick={this.handleCount('incrementIfOdd')}>当前求和为奇数再加</button>&nbsp;
				<button onClick={this.handleCount('incrementAsync')}>异步加</button>
			</div>
		)
	}
}

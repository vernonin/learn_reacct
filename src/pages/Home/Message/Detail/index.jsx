import React, { Component } from 'react'

// key=value&key=value ==> urlencoded 编码


const DETAIL_DATA = [
	{id: '1', content: '你好，中国！'},
	{id: '2', content: '你好，广西！'},
	{id: '3', content: '你好，百色！'},
	{id: '4', content: '你好，隆林！'}
]

export default class Detail extends Component {
	render() {
		// 接收 params 参数
		// const {id, title} = this.props.match.params

		// 接收 search 参数
		// const {search} = this.props.location
		// const obj = JSON.parse('{"' + search.slice(1).replace(/&/g,'","').replace(/=/g,'":"')+'"}')
		// const {id, title} = obj

		// console.log(this.props)
		// 接收 search 参数
		const {id, title} = this.props.location.state || {}

		const findResult = DETAIL_DATA.find(detailObj => detailObj.id === id || {})
		return (
			<ul>
				<li>ID: {id}</li>
				<li>TITLE: {title}</li>
				<li>CONTENT: {findResult.content}</li>
			</ul>
		)
	}
}

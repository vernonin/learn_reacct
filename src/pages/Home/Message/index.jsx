import React, {Component} from 'react'

import { Link, Route } from 'react-router-dom'

import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr: [
      {id: '1', title: 'message001'},
      {id: '2', title: 'message002'},
      {id: '3', title: 'message003'},
      {id: '4', title: 'message004'},
    ]
  }
  render() {
    const {messageArr} = this.state
    return (
      <div>
        <ul>
					{
            messageArr.map(msgObj => {
              return (
                <li key={msgObj.id}>
                  {/* 向路由组件传递 params 参数 */}
                  {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                  {/* 向路由组件传递 search 参数  */}
                  {/* <Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                  {/* 向路由组件传递 state 参数 */}
                  <Link to={{pathname:'/home/message/detail', state: {id: msgObj.id, title: msgObj.title}}}>{msgObj.title}</Link>
                </li>
              )
            })
          }
				</ul>
        <hr />
        {/* 声明接收 params 参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

        {/* search 参数无需声明接收，正常注册路由即可 */}
        {/* <Route path="/home/message/detail" component={Detail}/> */}

        {/* state 参数无需声明接收，正常注册路由即可 */}
        <Route path="/home/message/detail" component={Detail}/>
      </div>
    )
  }
} 
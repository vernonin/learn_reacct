import React, { Component } from 'react'
import {NavLink, Route, Switch, Redirect} from 'react-router-dom'

import Home from '../../pages/Home'
import About from '../../pages/About'
import Test from '../../pages/Test'
import Header from '../Header'

import './index.css'
export default class RouterV5 extends Component {
  render() {
    return (
      <div className='container'>
        <Header/>
        <div className='main'>
          <div>
            {/* <div className='lefe-nav'>About</div>
            <div className='lefe-nav'>Home</div> */}
              <NavLink activeClassName='huanglin' className='lefe-nav' to="/about">About</NavLink>
              <NavLink activeClassName='huanglin' className='lefe-nav' to="/home">Home</NavLink>
          </div>
          <div className='content'>
            {/* 注册路由 */}

            {/* Route标签的exact属性，表示：开启严格匹配 */}
            <Switch>
              <Route path="/about" component={About}/>
              <Route path="/home" component={Home}/>
              <Route exact path="/home" component={Test}/>
              <Redirect to="/about"/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
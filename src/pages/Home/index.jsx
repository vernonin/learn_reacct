import React, { Component } from 'react'

import { NavLink, Route, Switch, Redirect } from 'react-router-dom'

import News from './News'
import Message from './Message'

import './index.css'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home...</h1>
        <div>
          <div>
            {/* <a href="#" className="home-nav">News</a>
            <a href="#" className="home-nav">Message</a> */}
            <NavLink activeClassName='huanglin' className="home-nav" to="/home/news">News</NavLink>
            <NavLink activeClassName='huanglin' className="home-nav" to="/home/message">Message</NavLink>
          </div>
          <div>
            <Switch>
              <Route path="/home/news" component={News}/>
              <Route path="/home/message" component={Message}/>
              <Redirect to="/home/news"/>
            </Switch>
            
            {/* <News />
            <Message /> */}
          </div>
        </div>
      </div>
    )
  }
}
import React, { Component } from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'
import Message from './Home/Message'
import News from './Home/News'
import AppNavLink from '../components/AppNavLink'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>This is Home</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <AppNavLink to="/home/news">News</AppNavLink>
            </li>
            <li>
              <AppNavLink to="/home/message">Message</AppNavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/home/news" component={News}/>
            <Route path="/home/message" component={Message}/>
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    )
  }
}

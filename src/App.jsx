import React, { Component } from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'
import Header from './components/Header'
import AppNavLink from './components/AppNavLink'
import About from './pages/About'
import Home from './pages/Home'

export default class App extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-xs-offset-2 col-xs-8">
            <div class="page-header">
              <Header />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-2 col-xs-offset-2">
            <div class="list-group">
              <AppNavLink to="/about">About</AppNavLink>
              <AppNavLink to="/home">Home</AppNavLink>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="panel">
              <div class="panel-body">
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  <Redirect to="/about" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

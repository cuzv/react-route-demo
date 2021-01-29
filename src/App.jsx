import React, { Component } from 'react'
import Header from './components/Header'
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
              <a class="list-group-item active" href="./about.html">About</a>
              <a class="list-group-item" href="./home.html">Home</a>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="panel">
              <div class="panel-body">
              <About />
              <Home />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

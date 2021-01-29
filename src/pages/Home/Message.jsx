import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Detail from './Message/Detail'

export default class Message extends Component {
  state = {
    messages: [
      {id: '001', title: 'message001', content: 'message001message001message001message001'},
      {id: '002', title: 'message002', content: 'message002message002message002message002'},
      {id: '003', title: 'message003', content: 'message003message003message003message003'},
    ]
  }
  
  render() {
    const {messages} = this.state
    return (
      <div>
        <ul>
          {
            messages.map(message => {
              return (
                <li key={message.id}>
                  <Link to={{pathname: "/home/message/detail", state: {...message}}}>{message.title}</Link>&nbsp;&nbsp;
                </li>
              )
            })
          }
        </ul>
        <hr />
        <Route path="/home/message/detail" component={Detail} />
      </div>
    )
  }
}

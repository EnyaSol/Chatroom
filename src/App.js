import React, { Component } from 'react';
import './App.css';
import ChatBox from "./components/chatbox/ChatBox";
import io from 'socket.io-client'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            messages: []
        }
        var socket = io('http://127.0.0.1:5000');

        socket.on('connect', function(){
            console.log("CONNECTED TO SERVER!")
        })

        socket.on('message', function(msg){
            // $("#messages").append('<li>' + msg + '<li>');
            console.log('Received message ' + msg);
        });

        // socket.send(textbox.val());
        // textbox.val('');
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Aaron's Chat App</h1>
        </header>
          <ChatBox messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;

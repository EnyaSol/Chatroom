import React from 'react';
import ChatViewport from "./ChatViewport";
import ChatInput from "./ChatInput";

export default class ChatBox extends React.Component {



    render() {
        return (<div>
            <ChatViewport messages={this.props.messages}/>
            <ChatInput/>
        </div>);
    }
}

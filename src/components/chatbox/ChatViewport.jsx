import React from 'react';



const ChatViewport = (props) => {
    return (
        <ul id={"messages"}>{
                props.messages.map(function(message){ return (<li>{message}</li>) })
        }</ul>

    )
}
export default ChatViewport;
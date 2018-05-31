import React from 'react';

export default class ChatInput extends React.Component {
    render() {
        return (
            <React.Fragment>
            <input type={"text"} id={"my-messages"}/>
            <button id={"send-button"} className={"btn-primary"}>Send</button>
            </React.Fragment>
            );
    }
}

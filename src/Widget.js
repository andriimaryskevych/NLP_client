import React, { Component } from 'react';
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import './widget.css';


class WidgetComponent extends Component {
    handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
    }

    render () {
        return (
            <Widget
                handleNewUserMessage={this.handleNewUserMessage}
            />
        )
    }
}

export default WidgetComponent;

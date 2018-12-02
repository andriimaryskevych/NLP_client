import React, { Component } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import './widget.css';


class WidgetComponent extends Component {
    handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);

        addResponseMessage('Accepted');
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

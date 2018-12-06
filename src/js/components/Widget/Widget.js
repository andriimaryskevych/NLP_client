import React, { Component } from 'react';
import {
    Widget,
    addResponseMessage,
    addLinkSnippet
} from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import './widget.css';


class WidgetComponent extends Component {
    handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);

        addResponseMessage('Link below');
        addLinkSnippet({
            title: 'My awesome link',
            link: 'https://github.com/Wolox/react-chat-widget',
            target: '_blank'
        });
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

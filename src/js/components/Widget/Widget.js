import React, { Component } from 'react';
import {
    Widget,
    addResponseMessage,
    addLinkSnippet
} from 'react-chat-widget';

import axios from 'axios';

import constants from '../../constants';

import 'react-chat-widget/lib/styles.css';
import './widget.css';

const {
    AUTOBAZAR,
    AUTO_RIA
} = constants.CAR_STORE;

class WidgetComponent extends Component {
    handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);

        axios.post('http://localhost:8080/api/message', {
            message: newMessage
        })
        .then(response => {
            const {
                type,
                payload
            } = response.data;

            switch (type) {
                case constants.RESPONSE_TYPE.PLAIN:
                    addResponseMessage(payload.message);
                    break;
                case constants.RESPONSE_TYPE.LINKS:
                    if (payload[AUTOBAZAR].status === 200) {
                        addLinkSnippet({
                            title: `${AUTOBAZAR} link`,
                            link: payload[AUTOBAZAR].link,
                            target: '_blank'
                        });
                    }

                    if (payload[AUTO_RIA].status === 200) {
                        addLinkSnippet({
                            title: `${AUTO_RIA} link`,
                            link: payload[AUTO_RIA].link,
                            target: '_blank'
                        });
                    }
                    break;
            }
        })
        .catch(() => {
            addResponseMessage('Smth went wrong');
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

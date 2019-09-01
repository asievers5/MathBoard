import React from 'react'
import { Container } from 'reactstrap'

import SendMessageForm from './components/SendMessageForm'
import MessageList from './components/MessageList'
import WhiteBoard from './components/WhiteBoard'

import './chatstyles.css'

class AppChat extends React.Component {

    render() {
        return (
            <Container className="app">
                <WhiteBoard />
                <MessageList/>
                <SendMessageForm />
            </Container>
        )
    }

}

export default AppChat
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'

import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'

import { instanceLocator, tokenUrl } from './config'

class AppChat extends React.Component {

    constructor() {
        super()
        this.state = {
            currentUser: null
        }
    }

    componentDidMount() {
        const chatManager = new ChatManager({
            instanceLocator,
            userId: 'Admin',
            tokenProvider: new TokenProvider({
                url: tokenUrl
            })
        })

        chatManager.connect()
            .then(currentUser => {
                console.log(`${currentUser.name} successfully connected to Chatkit.`)

                this.setState({
                    currentUser
                })
            })
            .catch(err => {
                console.log(`Error connecting to chatkit: ${err}`)
            })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col><MessageList /></Col>
                </Row>
                <Row>
                    <Col><SendMessageForm /></Col>
                </Row>
            </Container>
        )
    }

}

export default AppChat
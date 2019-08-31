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
            roomId: ''
        }

        this.currentUser = null
        this.hasDefaultRoom = this.hasDefaultRoom.bind(this)
        this.createDefaultRoom = this.createDefaultRoom.bind(this)
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

                this.currentUser = currentUser
                if (!this.hasDefaultRoom()) {
                    this.createDefaultRoom()
                }
            })
            .catch(err => {
                console.log(`Error connecting to chatkit: ${err}`)
            })
    }

    hasDefaultRoom() {
        let roomList = this.currentUser.rooms

        for (let i = 0; i < roomList.length; i++) {
            let room = roomList[i]

            if (room.id === '#Default') {
                console.log(`${this.currentUser.name} is already a member of #Default`)
                return true
            }
        }

        return false
    }

    createDefaultRoom() {
        this.currentUser.createRoom({
            id: '#Default',
            name: 'Default Room',
            private: true,
            addUserIds: ['Admin']
        })
            .then(room => {
                console.log('Successfully created #Default')
                this.setState({ roomId: room.id })
            })
            .catch(err => {
                console.log(`Error creating room #Default: ${err}`)
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
import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'

class AppChat extends React.Component {

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
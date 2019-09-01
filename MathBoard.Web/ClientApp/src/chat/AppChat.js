import React from 'react'

import SendMessageForm from './components/SendMessageForm'
import MessageList from './components/MessageList'
import WhiteBoard from './components/WhiteBoard'
import Login from './components/Login'

class AppChat extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: ''
        }

        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(userName) {
        this.setState({ userName })
    }

    render() {
        if (this.state.userName) {
            return (
                <div>
                    <h1>Welcome, {this.state.userName}</h1>
                    <WhiteBoard />
                    <MessageList />
                    <SendMessageForm />
                </div>
            )
        }

        return (
            <div>
                <Login login={this.handleLogin}/>
            </div>
        )
    }

}

export default AppChat
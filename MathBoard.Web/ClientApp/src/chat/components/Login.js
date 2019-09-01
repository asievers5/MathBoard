import React from 'react'
import { Card, CardHeader, CardBody, Form, FormGroup, Input, Button} from 'reactstrap'

class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            userName: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.login(this.state.userName)
        this.setState({
            userName: ''
        })
    }

    render() {
        return (
            <div>
                <Card>
                    <CardHeader>Please Login</CardHeader>
                    <CardBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Input
                                    onChange={this.handleChange}
                                    value={this.state.userName}
                                    placeholder="Enter username"
                                    type="text" />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        )
    }

}

export default Login
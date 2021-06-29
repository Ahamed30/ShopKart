import React, { Component } from 'react'
import { Input, Form, FormGroup } from 'reactstrap'
import './Login.css'

class Register extends Component {
    render() {
        const { onRouteChange } = this.props;
        return (
                <div className="jumbotron vertical-center">
                    <Form className="login-form">
                        <h2 className="text-center">Register</h2>
                        <FormGroup className="mt-1 mb-3">
                            <Input type="email" placeholder="Email" required/>
                        </FormGroup>
                        <FormGroup className="mt-3 mb-3">
                            <Input type="text" placeholder="Username" required />
                        </FormGroup>
                        <FormGroup className="mt-3 mb-3">
                            <Input type="password" placeholder="Password" required />
                        </FormGroup>
                        <FormGroup className="mt-3 mb-3">
                            <Input type="password" placeholder="Confirm password"  required/>
                        </FormGroup>
                        <button onClick={() => { onRouteChange('loggedIn') }} className="btn btn-primary btn-block">REGISTER</button>
                    </Form>
                </div>
        )
    }
}

export default Register

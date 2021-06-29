import React, { Component } from 'react'
import { Input,  Form, FormGroup } from 'reactstrap'
import './Login.css'

class Login extends Component {
    render() {
        const { onRouteChange } = this.props;
        return (
                <div className="jumbotron vertical-center">
                    <Form className="login-form">
                        <h2 className="text-center">Login</h2>
                        <FormGroup className="has-float-label mt-1 mb-3">
                            <Input type="email" placeholder="Email" required/>
                        </FormGroup>
                        <FormGroup className="mt-3 mb-3">
                            <Input type="password" placeholder="Password" required/>
                        </FormGroup>
                        <p onClick={() => { onRouteChange('register') }} className="register" >Register Account</p>
                        <button onClick={() => { onRouteChange('loggedIn') }} className="btn btn-primary btn-block">LOGIN</button>
                    </Form>
                </div>
        )
    }
}

export default Login

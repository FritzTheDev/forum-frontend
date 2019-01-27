import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginPage extends Component {
    render() {
        return (
            <div></div>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        username: auth.username,
        email: auth.email,
        password: auth.password,
    }
}
export default connect(mapStateToProps)(LoginPage);
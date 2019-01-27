import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignupPage extends Component {
    render() {
        return (
            <div></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.user.auth
    }
}


export default connect(mapStateToProps)(SignupPage);
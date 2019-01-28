import React, { Component } from 'react';

import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,
    MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBBtn
} from "mdbreact";

import { connect } from 'react-redux';
import { login, logout } from '../actions/user_actions';

class Navbar extends Component {
    state = { isOpen: false, email: '', password: '' };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleLoginSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        this.props.login( email, password );
    }

    handleLogout = () => {
        this.props.logout();
    }
    render() {
        return (
            <MDBNavbar color="green darken-3 z-depth-2" dark expand="md">
                <MDBNavbarBrand>
                    <MDBNavLink to="/">
                        <strong className="white-text">Forum Example</strong>
                    </MDBNavLink>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    {this.renderAuthSection()}
                </MDBCollapse>
            </MDBNavbar>
        );
    }

    renderAuthSection() {
        console.log(this.props.userData)
        if (this.props.userData) {
            return (
                <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBNavLink to="/profile">Signed in as <strong>{this.props.userData.username}</strong></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="" onClick={this.handleLogout.bind(this)}>Sign Out</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                    </MDBNavItem>
                </MDBNavbarNav>
            )
        } else {
            return (
                <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBFormInline onSubmit={this.handleLoginSubmit}>
                            <div className="md-form my-0">
                                <input className="form-control mr-sm-2" onChange={this.handleChange.bind(this)} type="email" name="email" placeholder="Email" />
                            </div>
                            <div className="md-form my-0">
                                <input className="form-control mr-sm-2" onChange={this.handleChange.bind(this)} type="password" name="password" placeholder="Password" />
                            </div>
                            <div className="md-form my-0 pl-4">
                                <MDBBtn size="sm" type="submit" outline color="white" onClick={this.handleLoginSubmit.bind(this)}><strong>Log In</strong></MDBBtn>
                            </div>
                        </MDBFormInline>
                    </MDBNavItem>
                </MDBNavbarNav>
            )
        }
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        userData: auth.userData
    }
}

export default connect(mapStateToProps, { login, logout })(Navbar);
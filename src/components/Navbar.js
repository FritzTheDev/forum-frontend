import React, { Component } from 'react';

import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline
} from "mdbreact";

import { connect } from 'react-redux';

class Navbar extends Component {
    state = { isOpen: false, user: null, username: '', password: '' };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    handleLoginSubmit = (e) => {

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
        )
    }

    renderAuthSection() {
        if (this.state.user) {
            return (
                <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBNavLink to="/profile">Signed in as <strong>{this.state.user.username}</strong></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="#!" onClick={() => console.log('Sign Out')}>Sign Out</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                    </MDBNavItem>
                </MDBNavbarNav>
            )
        } else {
            return (
                <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBFormInline waves>
                            <div className="md-form my-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Username" />
                            </div>
                            <div className="md-form my-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Username" />
                            </div>
                            <MDBNavLink  to="#!" active>Log In</MDBNavLink>
                        </MDBFormInline>
                    </MDBNavItem>
                </MDBNavbarNav>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, Navbar);
import React, { Component } from 'react';

import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";

class NavbarPage extends Component {
    state = { isOpen: false, user: { username: 'Fritz'} };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <MDBNavbar color="indigo" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">Forum Example</strong>
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
                        <MDBNavLink to="profile">Signed in as {this.state.user.username}</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
            )
        }
    }
}

export default NavbarPage;
import React, { Component } from 'react';
import {Nav, Navbar, NavItem} from "react-bootstrap";

class App extends Component {
  render() {
    return (<div>
        <Navbar inverse  fluid>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#about">О нас</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#menu">Меню</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    Link Right
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Link Right
                </NavItem>
            </Nav>
        </Navbar>
    </div>);
  }
}

export default App;

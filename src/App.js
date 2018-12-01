import React, { Component } from 'react';
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {Main} from "./Main";
import {Header} from "./Header";

class App extends Component {
  render() {
    return (<div>


        <Header />
        <Main />
    </div>);
  }
}

export default App;

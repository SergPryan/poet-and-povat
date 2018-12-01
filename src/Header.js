import {Component} from "react";
import {Link, Router, Switch} from "react-router-dom";
import React from "react";
import {Nav, Navbar, NavItem} from "react-bootstrap";

export class Header extends Component {

    render() {
        return <Navbar inverse fluid>


                {/*<Navbar.Brand>*/}
                    {/*<Link to='/magazine'>Магазин</Link>*/}
                {/*</Navbar.Brand>*/}
                {/*<Navbar.Toggle/>*/}


                {/*<Navbar.Brand>*/}
                    {/*<Link to='/foto'>Фото</Link>*/}
                {/*</Navbar.Brand>*/}
                {/*<Navbar.Toggle/>*/}


                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/menu'>Меню</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>


                    <Navbar.Brand>
                        <Link to='/magazine'>Магазин</Link>
                    </Navbar.Brand>



                    <Navbar.Brand>
                        <Link to='/foto'>Фото</Link>
                    </Navbar.Brand>




                    <Navbar.Brand>
                        <Link to='/'>О нас</Link>
                    </Navbar.Brand>
                </Navbar.Collapse>



        </Navbar>

    }
}
// {/*<ul>*/}
// {/*<li><Link to='/'>Home</Link></li>*/}
// {/*<li><Link to='/about'>About</Link></li>*/}
// {/*</ul>*/}
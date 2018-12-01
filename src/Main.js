import {Component} from "react";
import {Route, Router, Switch} from "react-router-dom";
import React from "react";
import {Home} from "./Home";
import {Menu} from "./Menu";
import {Foto} from "./Foto";

export class Main extends Component{

    render(){
        return <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/menu' component={Menu} />
            <Route exact path='/foto' component={Foto} />
        </Switch>
    }

}

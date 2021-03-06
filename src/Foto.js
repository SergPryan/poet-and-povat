import {Component} from "react";
import React from "react";
import {Carousel} from "react-bootstrap";

class Foto extends Component{
    render(){
        return<Carousel>
            <Carousel.Item>
                <img src={require('./img/carousel.png')} width={900} height={500} alt="900x500" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={require('./img/carousel.png')} width={900} height={500} alt="900x500" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={require('./img/carousel.png')} width={900} height={500} alt="900x500" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>;
    }
}
export {Foto}
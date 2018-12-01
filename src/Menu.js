import {Component} from "react";
import React from "react";
import {Table} from "react-bootstrap";

export class Menu extends Component{

    render(){
        return<div>
            Список категорий с переходом по ссылке к нужной таблице
            <list>
                <ul><a>Салаты мясные</a></ul>
                <ul><a>Салаты рыбные</a></ul>
            </list>

            <h3>Салаты мясные</h3>
        <Table striped bordered condensed hover>
            <thead>
            <tr>
                <th>Название</th>
                <th>Описание</th>
                <th>Вес</th>
                <th>Цена</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>«Оливье» с бужениной
                    и перепелиным яйцом
                </td>

                <td>Оливье вполне можно назвать русским национальным салатом, это гвоздь программы на любом праздничном столе в России, а уж на Новогоднем столе он является обязательным блюдом, без которого не обходится не одна семья</td>
                <td>200 гр</td>
                <td>280 руб</td>
            </tr>
            </tbody>
            <h3>Салаты рыбные</h3>
        </Table>
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>Название</th>
                    <th>Описание</th>
                    <th>Вес</th>
                    <th>Цена</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>«Оливье» с бужениной
                        и перепелиным яйцом
                    </td>

                    <td>Оливье вполне можно назвать русским национальным салатом, это гвоздь программы на любом праздничном столе в России, а уж на Новогоднем столе он является обязательным блюдом, без которого не обходится не одна семья</td>
                    <td>200 гр</td>
                    <td>280 руб</td>
                </tr>
                </tbody>
            </Table>
        </div>
    }

}
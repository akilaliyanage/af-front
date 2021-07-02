import React  from 'react';
import ReactDOM from 'react-dom';
import {render, screen, cleanup} from '@testing-library/react'
import NavBar from '../NavBar'
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import expectExport from 'expect';
import Template from '../Template'
import MainTopic from '../MainTopic.jsx'

window.alert = jest.fn();

it('renders without crashing',() =>{
    const div = document.createElement('div')
    ReactDOM.render(
            <BrowserRouter>
            <Template/>
            </BrowserRouter>
    ,div)

})

it('snapshot' , () =>{
    const tree = renderer.create(
        <BrowserRouter>
        <Template/>
        </BrowserRouter>
    ).toJSON();

    expectExport(tree).toMatchSnapshot();
})
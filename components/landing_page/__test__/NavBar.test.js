import React  from 'react';
import ReactDOM from 'react-dom';
import {render, screen, cleanup} from '@testing-library/react'
import NavBar from '../NavBar'
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import expectExport from 'expect';
 

//clean up
afterEach(()=>cleanup())

//_test_ testcase
it('fake _test_',() =>{
    expect(true).toBeTruthy()
})

//checking the component is loading without crashing
it('renders without crashing',() =>{
    const div = document.createElement('div')
    const navbar_items  = [{url : 'kbcsd',item : 'cdc',_id : 'dads'}];
    ReactDOM.render(
            <BrowserRouter>
                <NavBar items={navbar_items} />
            </BrowserRouter>
    ,div)

})

it('navbar renders correctly', () =>{
    const navbar_items  = [{url : 'kbcsd',item : 'cdc',_id : 'dads'}];
    render(
            <BrowserRouter>
                <NavBar items={navbar_items} />
            </BrowserRouter>
    )
    const todoElement = screen.getByTestId('nav-list')
    //expect(getByTestId('nav-bar')).toContaineHTML('<li>')
    expectExport(todoElement).toContainHTML("</li>")
})

it('matches snapshot', () =>{
    const navbar_items  = [{url : '/register',item : 'register',_id : 'dads'}];
    const tree = renderer.create(
            <BrowserRouter>
                <NavBar items={navbar_items} />
            </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
    
})
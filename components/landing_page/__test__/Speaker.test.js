import React  from 'react';
import ReactDOM from 'react-dom';
import {render, screen, cleanup} from '@testing-library/react'
import NavBar from '../NavBar'
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import expectExport from 'expect';
import Speaker from '../Speaker'

//checking the componnet has a img tag

it('check the component has a img tag', () =>{
    render(
        <Speaker/>
)
    const todoElement = screen.getByTestId('speaker-img')
    //expect(getByTestId('nav-bar')).toContaineHTML('<li>')
    expectExport(todoElement).toContainHTML("<img")
})

//creating a snapshot
it('create a snapshot', () =>{
    const tree = renderer.create(
        <Speaker/>
    ).toJSON();

    expectExport(tree).toMatchSnapshot();
})

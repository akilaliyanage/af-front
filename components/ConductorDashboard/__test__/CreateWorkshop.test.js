import React  from 'react';
import ReactDOM from 'react-dom';
import {render, screen, cleanup} from '@testing-library/react'
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import expectExport from 'expect';


import CreateWorkshop from '../CreateWorkshop'

//clean up
afterEach(()=>cleanup())

//_test_ testcase
it('fake _test_',() =>{
    expect(true).toBeTruthy()
})

//checking the component is loading without crashing
it('renders without crashing',() =>{
    const div = document.createElement('div')
    ReactDOM.render(
           <BrowserRouter>
                <CreateWorkshop/>
           </BrowserRouter>
    ,div)

})


it('matches snapshot', () =>{
    const tree = renderer.create(
        <BrowserRouter>
            <CreateWorkshop/>
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
    
})
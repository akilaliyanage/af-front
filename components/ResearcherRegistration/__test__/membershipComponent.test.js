import React  from 'react';
import ReactDOM from 'react-dom';
import {render, screen, cleanup} from '@testing-library/react'
import MembershipComponent from '../membershipComponent'
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import expectExport from 'expect';

//clean up
afterEach(()=>cleanup())


//Test for successful rendering of the membership componant
it('Chech membership succssful rendering',() =>{
    const div = document.createElement('div')
    ReactDOM.render(
            <BrowserRouter>
                <MembershipComponent/>
            </BrowserRouter>
    ,div)

})

//Test for successful rendering of the membership componant - contain the label
it('membership Componant renders correctly', () =>{
    render(
            <BrowserRouter>
                <MembershipComponent />
            </BrowserRouter>
    )
    const memberContainer = screen.getByTestId('membership-container')
    expectExport(memberContainer).toContainHTML("</label>")
})


//Compare snapshot of membershipcomponanent dor testing
it('snapshot check for memberships', () =>{
    const componant = renderer.create(
            <BrowserRouter>
                <MembershipComponent/>
            </BrowserRouter>
    ).toJSON();

    expect(componant).toMatchSnapshot()
    
})

import React  from 'react';
import ReactDOM from 'react-dom';
import {render, screen, cleanup} from '@testing-library/react'
import PublicationComponent from '../publicationsComponant'
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import expectExport from 'expect';

//clean up
afterEach(()=>cleanup())


//Test for successful rendering of the membership componant(Load without crash)
it('Chech Publication succssful rendering',() =>{
    const div = document.createElement('div')
    let yearList = [2011 , 2012 , 2013]
    ReactDOM.render(
            <BrowserRouter>
                <PublicationComponent yearList={yearList}/>
            </BrowserRouter>
    ,div)

})

//Test for successful rendering of the qualification componant - contain the select element
it('Publication Componant renders correctly', () =>{
    let yearList = [2011 , 2012 , 2013]
    render(
            <BrowserRouter>
                <PublicationComponent yearList={yearList}/>
            </BrowserRouter>
    )
    const qualificationContainer = screen.getByTestId('qualification-container')
    expectExport(qualificationContainer).toContainHTML("</select>")
})


//Compare snapshot of qualification componant for testing - any changes to the
//qualification componant will be detecteted after creating the snapshot
it('snapshot check for Publication', () =>{
    let yearList = [2011 , 2012 , 2013 , 2021 , 2019]
    const componant = renderer.create(
            <BrowserRouter>
                <PublicationComponent yearList={yearList}/>
            </BrowserRouter>
    ).toJSON();

    expect(componant).toMatchSnapshot()
    
})


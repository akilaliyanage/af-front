import React  from 'react';
import ReactDOM from 'react-dom';
import {render, screen, cleanup} from '@testing-library/react'
import QualificationSection from '../qualificationInputSection'
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import expectExport from 'expect';

//clean up
afterEach(()=>cleanup())


//Test for successful rendering of the Qualification componant(Load without crash)
it('Chech Qualification succssful rendering',() =>{
    const div = document.createElement('div')
    let yearList = [2011 , 2012 , 2013 , 2014 , 2015]
    let UniList = ['Uni_1' , 'Uni_2' , 'Uni_3' , 'Uni_4']
    ReactDOM.render(
            <BrowserRouter>
                <QualificationSection UniList={UniList} yearList={yearList}/>
            </BrowserRouter>
    ,div)

})

//Test for successful rendering of the qualification componant - contain the select element
it('Qualification Componant renders correctly', () =>{
    let yearList = [2011 , 2012 , 2013 , 2014 , 2015]
    let UniList = ['Uni_1' , 'Uni_2' , 'Uni_3' , 'Uni_4']
    render(
            <BrowserRouter>
                <QualificationSection UniList={UniList} yearList={yearList}/>
            </BrowserRouter>
    )
    const qualificationContainer = screen.getByTestId('qualification-container')
    expectExport(qualificationContainer).toContainHTML("</datalist>")
})


//Compare snapshot of qualification componant for testing - any changes to the
//qualification componant will be detecteted after creating the snapshot
it('snapshot check for Publication', () =>{
    let yearList = [2011 , 2012 , 2013 , 2014 , 2015]
    let UniList = ['Uni_1' , 'Uni_2' , 'Uni_3' , 'Uni_4']
    const componant = renderer.create(
            <BrowserRouter>
                <QualificationSection UniList={UniList} yearList={yearList}/>
            </BrowserRouter>
    ).toJSON();

    expect(componant).toMatchSnapshot()
    
})


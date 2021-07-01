import React  from 'react';
import ReactDOM from 'react-dom';
import {render, screen, cleanup} from '@testing-library/react'
import NavBar from '../NavBar'
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import expectExport from 'expect';
import NewsCard from '../NewsCard'

//clean up
afterEach(()=>cleanup())


//_test_ testcase
it('fake _test_',() =>{
    expect(true).toBeTruthy()
})

//creating a snapshot
it('snapshot', () =>{
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

    const tree = renderer.create(<NewsCard date={new Date()}/>).toJSON()

    //expect(tree).toMatchSnapshot();
    expectExport(tree).toMatchSnapshot()
})

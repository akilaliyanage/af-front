import React  from 'react';
import ReactDOM from 'react-dom';
import {render, screen, cleanup} from '@testing-library/react';
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import expectExport from 'expect';
import MembershipComponent from '../membershipComponent';


afterEach(()=>cleanup())


it('create a snapshot of membershipComponent', () =>{
    const tree = renderer.create(
        <MembershipComponent/>
        
    ).toJSON();

    expectExport(tree).toMatchSnapshot();
})
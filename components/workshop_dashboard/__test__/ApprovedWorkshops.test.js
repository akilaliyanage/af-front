import React  from 'react';
import ReactDOM from 'react-dom';
import {render, screen, cleanup} from '@testing-library/react'
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import expectExport from 'expect';

import ApprovedWorkshops from '../ApprovedWorkshops'

//clean up
afterEach(()=>cleanup())
<<<<<<< HEAD
=======

>>>>>>> 661c7a6ddb1f16efe313c06655a1ef3ea1e62b93
//_test_ testcase
it('fake _test_',() =>{
    expect(true).toBeTruthy()
})

//checking the component is loading without crashing
it('renders without crashing',() =>{
    const div = document.createElement('div')
    ReactDOM.render(
           <BrowserRouter>
                <ApprovedWorkshops/>
           </BrowserRouter>
    ,div)
<<<<<<< HEAD
})

=======

})


>>>>>>> 661c7a6ddb1f16efe313c06655a1ef3ea1e62b93
it('matches snapshot', () =>{
    const tree = renderer.create(
        <BrowserRouter>
            <ApprovedWorkshops/>
        </BrowserRouter>
    ).toJSON();
<<<<<<< HEAD
    expect(tree).toMatchSnapshot();
=======

    expect(tree).toMatchSnapshot();
    
>>>>>>> 661c7a6ddb1f16efe313c06655a1ef3ea1e62b93
})
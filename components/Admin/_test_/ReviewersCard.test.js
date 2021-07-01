import React  from 'react';
import {render, screen, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import expectExport from 'expect';
import ReviewersCard from '../ReviewersCard';

afterEach(()=>cleanup())


it('Compare the snapshot of Reviewers card', () =>{
    const tree = renderer.create(
        <ReviewersCard/>
    ).toJSON();
    expectExport(tree).toMatchSnapshot();
})


test('Make sure component render without any issue', () => {
    render(<ReviewersCard />);
    screen.debug();
    expect(screen.getByText('Add new')).toBeInTheDocument();
  });
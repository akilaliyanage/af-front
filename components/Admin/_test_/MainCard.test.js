import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import MainCard from '../MainCard';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import expectExport from 'expect';


afterEach(()=>cleanup());

it('Compare the snapshot of MainCard', () =>{
    const tree = renderer.create(
        <MainCard/>
    ).toJSON();
    expectExport(tree).toMatchSnapshot();
  })

test('Make sure Component render without any issue', () => {
    render(<MainCard />);
    screen.debug();
    expect(screen.getByText('Updates are Pending')).toBeInTheDocument();
  });


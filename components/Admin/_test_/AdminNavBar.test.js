import React  from 'react';
import {render, screen, cleanup} from '@testing-library/react'
import AdminNavBar from '../AdminNavBar'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import expectExport from 'expect';


afterEach(()=>cleanup())

it('Compare the snapshot of Admin Nav Bar', () =>{
  const tree = renderer.create(
      <AdminNavBar/>
  ).toJSON();
  expectExport(tree).toMatchSnapshot();
})


test('Render Admin Nav Bar', () => {
    render(<AdminNavBar />);
    screen.debug();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });


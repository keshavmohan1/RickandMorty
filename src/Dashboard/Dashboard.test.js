import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Dashboard from './Dashboard'

afterEach(cleanup);

test('render h1 element', () => {
    const { getByTestId } = render(<Dashboard />); 
    expect(getByTestId('basicFirst')).toBeInTheDocument();
   });
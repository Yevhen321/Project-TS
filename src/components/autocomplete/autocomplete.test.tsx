import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Autocomplete } from '.';

afterEach(cleanup);

describe('Autocomplete Component', () => {
  it('test smthng', () => {
    render(<Autocomplete width="full" />);
    // expect(screen.getByTestId('input')).toHaveClass('fullWidth');
  });
});

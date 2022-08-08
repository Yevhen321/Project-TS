import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ToggleButton } from '.';

afterEach(cleanup);
const mockedOnChange = jest.fn();

describe('ToggleButton Component', () => {
  it('toggle change', () => {
    render(<ToggleButton onChange={mockedOnChange} />);
    const toggleButton = screen.getByTestId('toggle-btn') as HTMLInputElement;
    fireEvent.click(toggleButton);
    fireEvent.change(toggleButton, { target: { checked: true } });
  });
});

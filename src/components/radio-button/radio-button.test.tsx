import React from 'react';
import { cleanup, render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioButton } from '.';

afterEach(cleanup);
const mockedOnChange = jest.fn();

describe('RadioButton Component', () => {
  it('radiobutton onChange event', () => {
    render(<RadioButton checked={false} onChange={mockedOnChange} />);
    const radioButton = screen.getByRole('radio') as HTMLInputElement;
    expect(radioButton.checked).toEqual(false);
    fireEvent.click(radioButton);
    fireEvent.change(radioButton, { target: { checked: true } });
    expect(radioButton.checked).toEqual(true);
  });
});

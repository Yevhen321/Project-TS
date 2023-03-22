import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Input } from '.';

afterEach(cleanup);

describe('Input Component', () => {
  it('input onChange', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    const inputEl = screen.getByRole('textbox');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveValue('');
    userEvent.type(inputEl, 'Alex');
    expect(inputEl).toHaveValue('Alex');
  });

  it('input with label', () => {
    render(<Input label='Some Text' />);
    const textEl = screen.queryByText(/some text/i);
    expect(textEl).toBeInTheDocument();
  });

  it('input with leftLabel', () => {
    render(<Input leftLabel='Left Label Text' />);
    const textEl = screen.queryByText(/left label text/i);
    expect(textEl).toBeInTheDocument();
  });

  it('input with error message', () => {
    render(<Input errorMessage='This is error message' showError={true} />);
    const textEl = screen.queryByText(/this is error message/i);
    const errorShow = screen.queryByText(/true/i);
    expect(errorShow).toBeFalsy();
    expect(textEl).toBeInTheDocument();
  });
});

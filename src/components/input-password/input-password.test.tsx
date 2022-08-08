import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InputPassword } from '.';

afterEach(cleanup);
const onClick = jest.fn();

describe('InputPassword Component', () => {
  it('click on the icon & achange input type', () => {
    render(<InputPassword type="password" onClick={onClick} />);
    const input = screen.getByTestId('input');
    const icon = screen.getByTestId('icon-test');
    expect(input).toHaveAttribute('type', 'password');
    fireEvent.click(icon);
    expect(input).toHaveAttribute('type', 'text');
  });
});

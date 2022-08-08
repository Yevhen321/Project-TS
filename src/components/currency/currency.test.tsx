import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Currency } from '.';

afterEach(cleanup);
const onChange = jest.fn();

describe('Currency Component', () => {
  it('change the value', () => {
    render(<Currency onChange={onChange} />);
    const currencyComponent = screen.getByTestId('input') as HTMLInputElement;
    fireEvent.change(currencyComponent, { target: { value: '123' } });
    expect(currencyComponent.value).toBe('123');
  });
});

import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Icon } from '.';
import { IconTypes } from '../../data/icons';

afterEach(cleanup);
const mock = jest.fn();

describe('Icon Component', () => {
  it('icon', () => {
    render(<Icon size={16} name={IconTypes.VISIBLE} />);
    const icon = screen.getByTestId('icon-test');
    expect(icon).toBeInTheDocument();
  });
  it('icon11111', () => {
    render(<Icon name={IconTypes.MENU} size={14} fill="red" />);
    // ['svg-class-name'].map((svg) => mock(svg));
    // expect(mock).toHaveBeenCalledTimes(1);
    // expect(mock).toHaveBeenCalledWith('svg-class-name');
  });
});

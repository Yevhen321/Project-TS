import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CheckboxGroup } from '.';

const data = [
  { text: 'all', value: 'All' },
  { text: 'other', value: 'Other' },
];

describe('CheckboxGroup Component', () => {
  it('CheckboxGroup component', () => {
    const handleChange = jest.fn();
    render(
      <CheckboxGroup value="test" onChange={handleChange} options={data} />
    );
    const component = screen.getByTestId('checkbox-group-test');
    expect(component).toBeInTheDocument();
  });
});

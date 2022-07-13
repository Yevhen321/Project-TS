import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Checkbox } from '.';

describe('Checkbox Component', () => {
  it('checkbox event', () => {
    const handleChange = jest.fn();
    render(<Checkbox value="This is Checkbox" onChange={handleChange} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
    fireEvent.click(screen.getByRole('checkbox'));
    expect(handleChange).toHaveBeenCalled();
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});

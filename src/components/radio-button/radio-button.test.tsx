import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioButton } from '.';

describe('RadioButton Component', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('radiobutton onChange event', () => {
    render(<RadioButton checked={false} onChange={mockOnChange} />);
    const radioButton = screen.getByRole('radio') as HTMLInputElement;
    expect(radioButton.checked).toBe(false);
    fireEvent.click(radioButton);
    fireEvent.change(radioButton, { target: { checked: true } });
    expect(radioButton.checked).toBe(true);
  });

  it('renders label text', () => {
    render(
      <RadioButton label='Test Label' checked={false} onChange={mockOnChange} />
    );
    const labelText = screen.getByText('Test Label');
    expect(labelText).toBeInTheDocument();
  });

  it('calls onChange when clicked', () => {
    render(<RadioButton onChange={mockOnChange} checked={false} />);
    const radioButton = screen.getByRole('radio');
    fireEvent.click(radioButton);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('renders as checked when checked prop is true', () => {
    render(<RadioButton checked={true} onChange={mockOnChange} />);
    const radioButton = screen.getByRole('radio');
    expect(radioButton).toHaveAttribute('checked');
  });
});

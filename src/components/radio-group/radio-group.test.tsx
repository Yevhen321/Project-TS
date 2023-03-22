import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';
import { RadioGroup } from '.';

describe('RadioGroupComponent', () => {
  const options = [
    { value: 'option1', text: 'Option 1' },
    { value: 'option2', text: 'Option 2' },
    { value: 'option3', text: 'Option 3' },
  ];
  const onChangeMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders all radio buttons', () => {
    render(<RadioGroup value='' options={options} onChange={onChangeMock} />);

    options.forEach((option) => {
      const radioLabel = screen.getByText(option.text);
      const radioButtons = screen.getAllByRole('radio') as HTMLInputElement[];
      const radioButton = radioButtons.find(
        (button) => button.value === option.value
      );
      expect(radioLabel).toBeInTheDocument();
      expect(radioButton).toBeInTheDocument();
      expect(radioButton).toHaveAttribute('value', option.value);
    });
  });

  it('selects the correct radio button based on props', () => {
    render(
      <RadioGroup options={options} onChange={onChangeMock} value='option2' />
    );

    const selectedRadioButton = screen.getByText('Option 2');
    const radioButtons = screen.getAllByRole('radio') as HTMLInputElement[];
    const radioButton = radioButtons.find(
      (button) => button.value === 'option2'
    );
    expect(selectedRadioButton).toBeInTheDocument();
    expect(radioButton).toBeInTheDocument();
    expect(radioButton).toHaveAttribute('value', 'option2');
  });
});

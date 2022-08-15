import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DropDownSelect } from '.';
import { DropDownSelectStory } from './drop-down-select.stories';

afterEach(cleanup);
const mockedOnChange = jest.fn();
const mockedOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
];

describe('DropDownSelect Component', () => {
  it('drop-down-select click & select value', () => {
    render(
      <DropDownSelect
        options={mockedOptions}
        value={[]}
        onChange={mockedOnChange}
      />
    );
    const dropDownSelect = screen.getByDisplayValue('') as HTMLInputElement;
    fireEvent.click(dropDownSelect);
    fireEvent.change(dropDownSelect, { target: { value: 'Chocolate' } });
    expect(dropDownSelect.value).toBe('Chocolate');
  });

  it('should render without errors', async () => {
    const mockedOnChange = jest.fn();
    render(
      <DropDownSelect
        options={mockedOptions}
        onChange={mockedOnChange}
        value={[]}
      />
    );
    const placeholder = screen.getByText(/select/i);
    expect(placeholder).toBeTruthy();
  });

  it('drop-down-select storybook', () => {
    render(
      <DropDownSelectStory
        options={mockedOptions}
        value={[]}
        onChange={mockedOnChange}
        isRtl={true}
        {...DropDownSelectStory.args}
      />
    );
    const dropDownSelect = screen.getByDisplayValue('') as HTMLInputElement;
    expect(dropDownSelect).toBeInTheDocument();
  });
});

import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import { DatePicker } from '.';
import { VariantDatePicker } from './date-picker.stories';

afterEach(cleanup);

describe('DatePicker Component', () => {
  it('date-picker click and change the date', () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(<DatePicker />);
    });
    const datePicker = screen.getByDisplayValue(
      new Date().toISOString().split('T')[0].replace(/-/g, '/')
    ) as HTMLInputElement;
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      fireEvent.change(datePicker, { target: { value: '2022/07/14' } });
    });
    expect(datePicker.value).toBe('2022/07/14');
  });

  it('date-picker storybook', () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(<VariantDatePicker {...VariantDatePicker.args} />);
    });
    const datePicker = screen.getByDisplayValue(
      new Date().toISOString().split('T')[0].replace(/-/g, '/')
    ) as HTMLInputElement;
    expect(datePicker).toBeInTheDocument();
  });
});

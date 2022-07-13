import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DatePicker } from '.';

afterEach(cleanup);

describe('DatePicker Component', () => {
  it('date-picker click and change the date', () => {
    render(<DatePicker />);
    const datePicker = screen.getByDisplayValue(
      '2022/07/13'
    ) as HTMLInputElement;
    fireEvent.click(datePicker);
    fireEvent.change(datePicker, { target: { value: '2022/07/14' } });
    expect(datePicker.value).toBe('2022/07/14');
  });
});

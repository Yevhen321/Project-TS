/* eslint-disable testing-library/no-debugging-utils */
import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Autocomplete } from '.';

afterEach(cleanup);
jest.useFakeTimers();

describe('Autocomplete Component', () => {
  // it('should debounce the filter function correctly', async () => {
  //   const mockCurrentOptions = [
  //     { value: 'option1', text: 'Option 1' },
  //     { value: 'option2', text: 'Option 2' },
  //   ];
  //   const onChangeMock = jest.fn();
  //   render(
  //     <Autocomplete
  //       value=''
  //       options={mockCurrentOptions}
  //       onChange={onChangeMock}
  //     />
  //   );
  //   const input = screen.getByRole('textbox');
  //   fireEvent.change(input, { target: { value: 'option' } });
  //   fireEvent.change(input, { target: { value: 'option2' } });
  //   expect(setTimeout).toHaveBeenCalledTimes(2);
  //   expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
  //   jest.runAllTimers();
  //   expect(onChangeMock).toHaveBeenCalledTimes(0);
  //   expect(screen.getByRole('listbox')).toBeInTheDocument();
  //   expect(screen.getByText('Option 2')).toBeInTheDocument();
  //   fireEvent.click(screen.getByText('Option 2'));
  //   expect(onChangeMock).toHaveBeenCalledTimes(1);
  //   expect(onChangeMock).toHaveBeenCalledWith('option2');
  //   expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  // });
});

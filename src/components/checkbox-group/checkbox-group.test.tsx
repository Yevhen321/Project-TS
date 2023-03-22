import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CheckboxGroup } from '.';

const options = [
  { text: 'Option 1', value: 'Option 1' },
  { text: 'Option 2', value: 'Option 2' },
  { text: 'Option 3', value: 'Option 3' },
];
const handleChange = jest.fn();

describe('CheckboxGroup Component', () => {
  it('CheckboxGroup component is in document', () => {
    render(
      <CheckboxGroup value='test' onChange={handleChange} options={options} />
    );
    const component = screen.getByTestId('checkbox-group-test');
    expect(component).toBeInTheDocument();
  });

  // it('should render options', () => {
  //   render(
  //     <CheckboxGroup options={options} value='' onChange={handleChange} />
  //   );
  //   options.forEach((o) => {
  //     expect(screen.getByText(o.text)).toBeInTheDocument();
  //   });
  // });

  // it('should disable checkboxes when disabled prop is true', () => {
  //   render(
  //     <CheckboxGroup
  //       options={options}
  //       value=''
  //       onChange={handleChange}
  //       disabled={true}
  //     />
  //   );

  //   options.forEach((o) => {
  //     expect(screen.getByRole('heading', { name: o.text })).toBeInTheDocument();
  //   });
  //   // eslint-disable-next-line testing-library/no-debugging-utils
  //   screen.debug();
  // });
});

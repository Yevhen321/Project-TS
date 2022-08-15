import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ToggleButton } from '.';
import { ToggleButtonStory } from './toggle-button.stories';

afterEach(cleanup);
const mockedOnChange = jest.fn();

describe('ToggleButton Component', () => {
  it('toggle change', () => {
    render(<ToggleButton onChange={mockedOnChange} />);
    const toggleButton = screen.getByTestId('toggle-btn') as HTMLInputElement;
    fireEvent.click(toggleButton);
    fireEvent.change(toggleButton, { target: { checked: true } });
  });

  it('toggle-button storybook', () => {
    render(
      <ToggleButtonStory
        onChange={mockedOnChange}
        {...ToggleButtonStory.args}
      />
    );
    const toggleButton = screen.getByTestId('toggle-btn') as HTMLInputElement;
    expect(toggleButton).toBeInTheDocument();
    fireEvent.click(toggleButton);
    fireEvent.change(toggleButton, { target: { checked: true } });
  });
});

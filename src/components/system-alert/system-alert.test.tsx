import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SystemAlert } from '.';
import { SystemAlertStory } from './system-alert.stories';

afterEach(cleanup);

describe('SystemAlert Component', () => {
  it('has status/class error', () => {
    render(<SystemAlert type="error" />);
    expect(screen.getByTestId('system-alert')).toHaveClass('error');
  });

  it('has status/class warning', () => {
    render(<SystemAlert type="warning" />);
    expect(screen.getByTestId('system-alert')).toHaveClass('warning');
  });

  it('has status/class success', () => {
    render(<SystemAlert type="success" />);
    expect(screen.getByTestId('system-alert')).toHaveClass('success');
  });

  it('has status/class info', () => {
    render(<SystemAlert type="info" />);
    expect(screen.getByTestId('system-alert')).toHaveClass('info');
  });

  it('has full width', () => {
    render(<SystemAlert type="success" width="full" />);
    expect(screen.getByTestId('system-alert')).toHaveClass('fullWidth');
  });

  it('system alert storybook', () => {
    render(<SystemAlertStory type="success" width="full" />);
    expect(screen.getByTestId('system-alert')).toHaveClass('fullWidth');
  });
});

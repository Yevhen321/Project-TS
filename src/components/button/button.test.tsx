import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '.';
import { IconTypes } from '../../data/icons';
import { VariantButton } from './button.stories';

afterEach(cleanup);

const onClick = jest.fn();

describe('Button Component', () => {
  it('test button text and type', () => {
    render(<Button text="Click Me" type="button" />);
    expect(screen.getByText(/[\w\s]/)).toBeDefined();
    expect(screen.getByRole('button')).toHaveAttribute('type');
  });

  it('test button click', () => {
    render(<Button text="Click Me" onClick={onClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('test button secondary and small', () => {
    render(<Button text="Click Me" variant="secondary" size="small" />);
    expect(screen.getByRole('button')).toHaveClass('secondary');
    expect(screen.getByRole('button')).toHaveClass('small');
  });

  it('test button primary and large', () => {
    render(<Button text="Click Me" variant="primary" size="large" />);
    expect(screen.getByRole('button')).toHaveClass('primary');
    expect(screen.getByRole('button')).toHaveClass('large');
  });

  it('test button outlined and medium', () => {
    render(<Button text="Click Me" variant="outlined" size="medium" />);
    expect(screen.getByRole('button')).toHaveClass('outlined');
    expect(screen.getByRole('button')).toHaveClass('medium');
  });

  it('test button icon', () => {
    render(<Button text="Click Me" icon={{ name: IconTypes.INFO }} />);
    expect(screen.getAllByRole('button')).toBeDefined();
  });

  it('test button width', () => {
    render(<Button text="Click Me" width="full" />);
    expect(screen.getByRole('button')).toHaveClass('fullWidth');
  });

  it('test VariantButton from storybook', () => {
    render(<VariantButton text="My button" {...VariantButton.args} />);
    expect(screen.getByRole('button')).toHaveTextContent(/my button/i);
  });
});

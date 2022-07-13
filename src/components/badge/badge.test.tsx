import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Badge } from '.';

afterEach(cleanup);

describe('Badge Component', () => {
  it('badge type active', () => {
    render(<Badge type="active" text="Badge text" />);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
    expect(screen.getByTestId('badge')).toHaveClass('secondaryOrange');
  });

  it('badge type new', () => {
    render(<Badge type="new" text="Badge text" />);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
    expect(screen.getByTestId('badge')).toHaveClass('primaryGreen');
  });

  it('badge type completed', () => {
    render(<Badge type="completed" text="Badge text" />);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
    expect(screen.getByTestId('badge')).toHaveClass('secondaryGreen');
  });

  it('badge type popular', () => {
    render(<Badge type="popular" text="Badge text" />);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
    expect(screen.getByTestId('badge')).toHaveClass('primaryOrange');
  });

  it('badge type active', () => {
    render(<Badge type="active" text="Badge text" />);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
    expect(screen.getByTestId('badge')).toHaveClass('secondaryOrange');
  });

  it('badge type recommended', () => {
    render(<Badge type="recommended" text="Badge text" />);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
    expect(screen.getByTestId('badge')).toHaveClass('recommendedBlue');
  });

  it('badge type pending', () => {
    render(<Badge type="pending" text="Badge text" />);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
    expect(screen.getByTestId('badge')).toHaveClass('secondaryBlue');
  });

  it('badge type deactivated', () => {
    render(<Badge type="deactivated" text="Badge text" />);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
    expect(screen.getByTestId('badge')).toHaveClass('primaryGray');
  });

  it('badge type not-available', () => {
    render(<Badge type="not-available" text="Badge text" />);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
    expect(screen.getByTestId('badge')).toHaveClass('secondaryRed');
  });

  it('badge type opposite', () => {
    render(<Badge type="opposite" text="Badge text" />);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
    expect(screen.getByTestId('badge')).toHaveClass('opposite');
  });
});

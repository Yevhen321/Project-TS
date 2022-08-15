import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Text } from '.';
import { TextStory } from './text.stories';

afterEach(cleanup);

describe('Text Component', () => {
  it('text in the document', () => {
    render(<Text text="Test text" />);
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });

  it('text h1 tag', () => {
    render(<Text text="Test text" variant="h1" />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('text h2 tag', () => {
    render(<Text text="Test text" variant="h2" />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('text h3 tag', () => {
    render(<Text text="Test text" variant="h3" />);
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
  });

  it('text h4 tag', () => {
    render(<Text text="Test text" variant="h4" />);
    expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument();
  });

  it('text h5 tag', () => {
    render(<Text text="Test text" variant="h5" />);
    expect(screen.getByRole('heading', { level: 5 })).toBeInTheDocument();
  });

  it('text h6 tag', () => {
    render(<Text text="Test text" variant="h6" />);
    expect(screen.getByRole('heading', { level: 6 })).toBeInTheDocument();
  });

  it('text storybook', () => {
    render(<TextStory text="Storybook" {...TextStory.args} />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});

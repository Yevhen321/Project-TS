import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Avatar } from '.';
import { AvatarStory } from './avatar.stories';

afterEach(cleanup);

describe('Avatar Component', () => {
  it('test avatar medium size', () => {
    render(<Avatar size="medium" />);
    expect(screen.getByTestId('avatar')).toHaveClass('medium');
    expect(screen.getByTestId('avatar')).toHaveClass('white');
  });

  it('test avatar small size', () => {
    render(<Avatar size="small" />);
    expect(screen.getByTestId('avatar')).toHaveClass('small');
    expect(screen.getByTestId('avatar')).toHaveClass('white');
  });

  it('test avatar large size', () => {
    render(<Avatar size="large" />);
    expect(screen.getByTestId('avatar')).toHaveClass('large');
    expect(screen.getByTestId('avatar')).toHaveClass('white');
  });

  it('test avatar image', () => {
    render(<Avatar size="medium" image="./image/photo.png" />);
    expect(screen.getByTestId('avatar')).toHaveStyle(
      'background-image: url(./image/photo.png)'
    );
  });

  it('test storybook', () => {
    render(<AvatarStory size="large" {...AvatarStory.args} />);
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });
});

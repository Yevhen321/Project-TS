import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Icon } from '.';
import { IconTypes } from '../../data/icons';
// import { ReactSVG } from 'react-svg';

afterEach(cleanup);
// const mock = jest.fn();

describe('Icon Component', () => {
  it('icon', () => {
    render(<Icon size={16} name={IconTypes.VISIBLE} />);
    const icon = screen.getByTestId('icon-test');
    expect(icon).toBeInTheDocument();
  });
  // it('icon11111', () => {
  //   render(<ReactSVG beforeInjection={mock} src={`/assets/icons/menu.svg`} />);
  //   [1].map((svg) => mock(svg));
  //   expect(mock).toBeCalledWith(expect.hasAssertions());
  //   // eslint-disable-next-line testing-library/no-debugging-utils
  //   screen.debug();
  // });
});

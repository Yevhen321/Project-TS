/* eslint-disable testing-library/no-debugging-utils */
import React from 'react';
import '@testing-library/jest-dom';
import i18n from '../../i18n/i18n';
import { render, fireEvent, screen } from '@testing-library/react';
import { LanguageSelect } from '.';

jest.mock('i18next', () => ({
  changeLanguage: jest.fn(),
}));

describe('LanguageSelect Component', () => {
  // it('should render the default language', () => {
  //   render(<LanguageSelect />);
  //   const component = screen.getByTestId('language-select');
  //   expect(component).toBeInTheDocument();
  // });
});

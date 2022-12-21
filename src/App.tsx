import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { Button } from './components/button';
import { Icon } from './components/icon';
import { RadioButton } from './components/radio-button';
import { Sidebar } from './components/sidebar';
import { Login } from './pages/login';
import { userInfo } from './data/user';

const data = [
  { text: 'all', value: 'All' },
  { text: 'other', value: 'Other' },
];

export const App = () => {
  const [state, setState] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <Button
        text={t('INPUT.COMMON_NAME', { ns: 'input' })}
        onClick={() => changeLanguage('ru')}
      />
      <Button
        text={t('BUTTON.COMMON_NAME', { ns: 'button' })}
        onClick={() => {
          changeLanguage('en');
          localStorage.setItem('lng', 'en');
        }}
      />
      <Sidebar userInfo={userInfo} />
      {/* <Routes>
        <Route path="/" element="" />
        <Route path="/statistics" element="" />
        <Route path="/projects" element="" />
        <Route path="/catalogue" element="" />
        <Route path="/notifications" element="" />
        <Route path="/notifications" element="" />
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </>
  );
};

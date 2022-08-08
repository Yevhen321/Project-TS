import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Icon } from './components/icon';
import { RadioButton } from './components/radio-button';
import { Login } from './pages/login';

const data = [
  { text: 'all', value: 'All' },
  { text: 'other', value: 'Other' },
];

export const App = () => {
  const [state, setState] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element="" />
        <Route path="/statistics" element="" />
        <Route path="/projects" element="" />
        <Route path="/catalogue" element="" />
        <Route path="/notifications" element="" />
        <Route path="/notifications" element="" />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

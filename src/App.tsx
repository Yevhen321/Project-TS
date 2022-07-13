import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';

export const App = () => {
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

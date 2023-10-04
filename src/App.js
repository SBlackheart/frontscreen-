import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Top from './component/Top';

const App = () => {
  return (
    <BrowserRouter>
        <Top/>
    </BrowserRouter>
  );
};

export default App;
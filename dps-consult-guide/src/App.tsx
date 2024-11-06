import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './features/Auth/LoginScreen';
import MainLayout from './layouts/MainLayout';
import './styles/index.scss';
import NotFoundScreen from './components/NotFoundScreen';
import GuideScreen from './features/Guide/GuideScreen';
import GuideDetailScreen from './features/Guide/GuideDetailScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/guide" element={<GuideScreen />} />
          <Route path="/guide-detail/:id" element={<GuideDetailScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

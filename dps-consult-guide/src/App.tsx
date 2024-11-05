import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './features/Auth/LoginScreen';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/login" element={<LoginScreen />} />
        {/*   <Route path="/guide" element={<GuideScreen />} />
          <Route path="/guide-detail" element={<GuideDetailScreen />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

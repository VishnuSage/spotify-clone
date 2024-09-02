import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Display from './components/Display';
import CTABanner from './components/CTABanner';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage'; // Import the new SignUpPage component

const App = () => {
  return (
    <Routes>
      {/* Route for LoginPage */}
      <Route path="/login" element={<LoginPage />} />

      {/* Route for SignUpPage */}
      <Route path="/signup" element={<SignUpPage />} />

      {/* Route for the main application layout */}
      <Route
        path="*"
        element={
          <div className='h-screen bg-black manrope'>
            <div className='h-[90%] flex'>
              <Sidebar />
              <Display />
            </div>
            <CTABanner />
          </div>
        }
      />
    </Routes>
  );
};

export default App;

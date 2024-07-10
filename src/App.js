import React from 'react';
import ReferEarnPage from './components/ReferEarnPage';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <ReferEarnPage />
    </div>
  );
};

export default App;

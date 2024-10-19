import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ServiceDetail from './components/ServiceDetail';
import Footer from './components/Footer';
import './index.css'; // or './App.css'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

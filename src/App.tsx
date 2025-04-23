import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Dashboard from './pages/Dashboard';
import PredictionSystem from './pages/PredictionSystem';
import PreventionSystem from './pages/PreventionSystem';
export function App() {
  return <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/prediction" element={<PredictionSystem />} />
            <Route path="/prevention" element={<PreventionSystem />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>;
}
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizList from './pages/QuizList';
import QuizPage from './pages/QuizPage';
import ScorePage from './pages/ScorePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<QuizList />} />
          <Route path="/quiz/:id" element={<QuizPage />} />
          <Route path="/score/:id" element={<ScorePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

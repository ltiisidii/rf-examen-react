import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home';
import Quiz from './component/Quiz';
import Learn from './component/Learn';
import Footer from './component/Footer';

function App() {
  
  return (
    <div className="App">  
      <Routes component="span">
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
          <Route path="/quiz" element={<Quiz />} />
      </Routes>
      <Footer />
</div>
)
}

export default App
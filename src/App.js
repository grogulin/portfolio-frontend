import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProjectsList from './components/ContentManagement';
import LoginPage from './components/LoginPage';
import { useState } from 'react';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  return (
    <Router basename='/portfolio'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/content-management"
          element={isAuthenticated ? <ProjectsList /> : <LoginPage setIsAuthenticated={setIsAuthenticated} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

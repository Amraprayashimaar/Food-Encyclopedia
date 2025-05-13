import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Recipes from './Recipes';
import RecipeDetailPage from './RecipeDetailPage';
import About from './About';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:cuisine" element={<Recipes />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    </Router>
  );
}

export default App;

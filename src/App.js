import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import SingleDrink from './pages/SingleDrinks';
import Error from './pages/Error';
import UserCocktails from './components/UserCocktails';
function App() {
  return (
    <Router>
      <Navbar />
      <UserCocktails />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cocktail/:id' element={<SingleDrink />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

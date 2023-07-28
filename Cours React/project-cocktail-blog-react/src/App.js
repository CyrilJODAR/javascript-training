import './App.css';
import CocktailAll from './pages/CocktailAll';
import CocktailRandom from './pages/CocktailRandom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/cocktails" element={<CocktailAll/>} /> 
            <Route path="/randomCocktails" element={<CocktailRandom />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

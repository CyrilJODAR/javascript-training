import './App.css';
import CocktailAll from './pages/CocktailAll';
import CocktailRandom from './pages/CocktailRandom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './pages/Homepage';
import SearchResult from './pages/SearchResult';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/cocktails" element={<CocktailAll/>} />
            {/* <Route path="/cocktails/detail/:id" element={<CocktailDetails/>}
            === >>  const { id } = useParams()/>          */}
            <Route path="/randomCocktails" element={<CocktailRandom />} />
            <Route path="/searchedCocktails" element={<SearchResult/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

import './App.css';
import CocktailAll from './CocktailAll';
import Footer from './Footer';
import Header from './Header';


function App() {
  return (
    <>
      <Header/>
      <main className='myMain'>
        <section className='sectionCocktails'>
          <CocktailAll/>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;

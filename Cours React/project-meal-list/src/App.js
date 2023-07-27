import './App.css';
import Footer from './Footer';
import Header from './Header';
import MealCategoryList from './MealCategoryList';
// import MealList from './MealList';



function App() {
  return (
    <>
      <Header />
      <main className="myMain">
        {/* <MealList /> */}
        <MealCategoryList />
      </main>
      <Footer />
    </>
  )
}

export default App;

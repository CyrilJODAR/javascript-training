import './App.css';
import CocktailAll from './CocktailAll';
import CocktailLastThree from './CocktailLastThree';
import CocktailRandom from './CocktailRandom';
import Footer from './Footer';
import Header from './Header';
import RhumCocktails from './RhumCocktails';
import UserInfo from './UserInfo';

function App() {
  const userFromApi = {
    firstName: "John",
    lastName: "Doe",
    age: 42,
    email: "contact@johndoe.fr",
    phone: "0123456789",
    adress: "1 rue de la Paix",
    city: "Paris",
    zipCode: "75000",
    country: "France",
    job: "Développeur web",
  };
  const cocktailsFromApi = [
    {
      id: 1,
      name: "Mojito",
      price: 8,
      ingredients: ["Rhum", "Menthe", "Citron vert", "Eau gazeuse"],
      isPublished: true,
    },
    {
      id: 2,
      name: "Margarita",
      price: 10,
      ingredients: ["Tequila", "Triple sec", "Citron vert"],
      isPublished: true,
    },
    {
      id: 3,
      name: "Sangria",
      price: 6,
      ingredients: ["Vin rouge", "Fruits", "Sucre"],
      isPublished: false,
    },
    {
      id: 4,
      name: "Pina colada",
      price: 12,
      ingredients: ["Rhum", "Lait de coco", "Jus d'ananas"],
      isPublished: true,
    }, {
      id: 5,
      name: "Bloody Mary",
      price: 8,
      ingredients: ["Vodka", "Jus de tomate", "Sauce Worcestershire"],
      isPublished: true,
    }, {
      id: 6,
      name: "Ti punch",
      price: 8,
      ingredients: ["Rhum", "Citron vert", "Sirop de canne"],
      isPublished: true,
    }
  ];
  const cocktailPublished = cocktailsFromApi.filter(cocktail => cocktail.isPublished)
  return (
    <>
      <Header userFromApi={userFromApi}/>
      <main className='myMain'>
        <UserInfo userFromApi={userFromApi}/>
        <section className='sectionCocktails'>
          <CocktailRandom cocktailPublished={cocktailPublished}/>
          <CocktailLastThree cocktailPublished={cocktailPublished}/>
          <CocktailAll cocktailPublished={cocktailPublished}/>
          <RhumCocktails cocktailPublished={cocktailPublished}/>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;

import './App.css';
import Header from './Header';
import PublishedLast from './PublishedLast';
import PublishedAll from './PublishedAll';
import CartProduct from './CartProduct';
import Footer from './Footer';

function App() {
  const productsFromApi = [
    {
      name: "Chaise",
      price: 100,
      description: "Une chaise",
      publishedAt: "2021-09-01T10:00:00.000Z",
      category: "meuble",
    },
    {
      name: "Table",
      price: 200,
      description: "Une table",
      publishedAt: "2021-08-01T10:00:00.000Z",
      category: "meuble",
    },
    {
      name: "Canapé",
      price: 300,
      description: "Un canapé",
      publishedAt: "2021-09-01T10:00:00.000Z",
      category: "meuble",
    },
    {
      name: "Télé",
      price: 400,
      description: "Une télé",
      publishedAt: "2021-07-01T10:00:00.000Z",
      category: "électroménager",
    },
    {
      name: "Frigo",
      price: 500,
      description: "Un frigo",
      publishedAt: "2021-09-01T10:00:00.000Z",
      category: "électroménager",
    },
    {
      name: "Four",
      price: 600,
      description: "Un four",
      publishedAt: "2021-05-01T10:00:00.000Z",
      category: "électroménager",
    },
  ];
  const cartFromApi = {
    items: [
      {
        product: "Chaise",
        amount: 200,
        quantity: 2,
      },
    ],
    totalAmount: 400,
    createdAt: "2021-09-01T10:00:00.000Z",
    user: "John Doe",
  };

  return (
    <>
      <Header cartFromApi={cartFromApi}/>
      <main className='myMain'>
        <section className='MainContent'>
          <PublishedAll productsFromApi={productsFromApi}/>
          <PublishedLast productsFromApi={productsFromApi}/>
        </section>
          <CartProduct cartFromApi={cartFromApi}/>
      </main>
      <Footer />
    </>
  );
}

export default App;

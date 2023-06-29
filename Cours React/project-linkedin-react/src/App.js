import './App.css';
import Experiences from './Experiences';
import FeedPosts from './FeedPosts';
import Footer from './Footer';
import Header from './Header';
import Profile from './Profile';


function App() {
  const userInfosFromFakeApi = {
    firstName: "John",
    lastName: "Doe",
    age: 42,
    email: "contact@johndoe.fr",
    phone: "0123456789",
    adress: "1 rue de la Paix",
    city: "Paris",
    zipCode: "75000",
    country: "France",
    job: "Développeur web"
    };

  return (
    <>
      <Header userInfosFromFakeApi={userInfosFromFakeApi}/>
      <main className="MainProfile">
        <Profile userInfosFromFakeApi={userInfosFromFakeApi}/>
        <Experiences />
        <FeedPosts />
      </main>
      <Footer />
    </>
    )
}

export default App;

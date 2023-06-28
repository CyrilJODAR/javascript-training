import './App.css';
import Experiences from './Experiences';
import Footer from './Footer';
import Header from './Header';
import Profile from './Profile';

function App() {
  return (
    <>
      <Header />
      <main className="MainProfile">
        <Profile />
        <Experiences />
      </main>
      <Footer />
    </>
    )
}

export default App;

import './App.css';
import Main from './Main/Main';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { animals } from './data';

function App() {
  return (
    <div className="App">
      <h1>Hello animals</h1>
      <Header />
      <Main animals={animals}/>
      <Footer />

    </div>
  );
}

export default App;

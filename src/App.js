import './App.css';
import Main from './Main/Main';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { animals } from './data';

function App() {
  return (
    <div className="App">
      <h1>Hello animals</h1>
      <Header name ='Farmer Bartholomew' />
      <Main animals={animals}/>
      <Footer email = 'therealoldmcdonalds@aol.com'/>

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Footer/>

    </div>
  );
}

export default App;

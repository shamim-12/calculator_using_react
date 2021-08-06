import logo from './logo.svg';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
        <img className= "logo" src={logo} alt="logo" />
        <Main/>
        
    </div>
  );
}

export default App;

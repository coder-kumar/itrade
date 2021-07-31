import logo from './logo.svg';
import './App.css';
import Eqty from './Eqty';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Eqty />
          <Eqty />
          <Eqty />
        </p>
      </header>
    </div>
  );
}

export default App;
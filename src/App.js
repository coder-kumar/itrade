import logo from './logo.svg';
import './App.css';
import './Eqty';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Eqty />
        </p>
      </header>
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './css/main.css';
import Listing from './components/Listing';
import data from './data/etsy.json';

function App() {
  return (
    <div className="App">
      <Listing items={data} />
    </div>
  );
}

export default App;

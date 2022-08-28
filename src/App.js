import './App.css';
import Rechart from './components/Rechart';
import AreaChartexample from './components/AreaChart';

//https://recharts.org/en-US
//npm install recharts

function App() {
  return (
    <div className="App">
      <h1>Simple Rechart</h1>
      <Rechart />
      <h1>Area Chart</h1>
      <AreaChartexample />
    </div>
  );
}

export default App;

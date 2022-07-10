import Sedan from "./Sedan";
import Suv from "./Suv";
import Luxury from "./Luxury";
import './Task.css';


function App() {
  return (
    <div className="cards">
    <Sedan />
    <Suv />
    <Luxury />
    </div>
  );
}

export default App;
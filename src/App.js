
import './App.css';
import Accordion from './Components/Accordian';
import RandomColor from './Components/Random-color';
import StarRating from './Components/star-rating';

function App() {
  return (
    <div className="App">

      {/* Accordian component
      <Accordion />

      {/* Random Color Component */}
      {/* <RandomColor /> */}

      {/* Star-rating Component */}
      <StarRating  noOfStars={8}/>

    </div>
  );
}

export default App;

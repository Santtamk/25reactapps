
import './App.css';
import Accordion from './Components/Accordian';
import RandomColor from './Components/Random-color';
import StopWatch from './Components/Stopwatch';
import TODoList from './Components/ToDoWithDelete';
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
      <StopWatch />
      <TODoList />

    </div>
  );
}

export default App;

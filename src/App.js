import './App.css';
import ConcatCard from './ConcatCard';
import IncrementDecrement from './IncrementDecrement';

function App() {
  return (
  <div id="app">
    <ConcatCard name ={'soul'} mobileNumber={347} workPhone={479}  email={"soul34@gmail.com"}/>
    <ConcatCard name ={'barry'} mobileNumber={689}  email={"barry456@gmail.com"}/>
    <ConcatCard name ={'thierno'} mobileNumber={224} workPhone={897}  email={"thierno324@gmail.com"}/>
    <IncrementDecrement num={4} />
  </div>

  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import ExampleComponent, {AnotherComponent} from './components/ExampleComponent';
import Greeting from './components/Greetings';

function App() {
  return (
    <div className="App">
      <ExampleComponent />
      <AnotherComponent />
      <Greeting name="Vinod" age="36" />
    </div>
  );
}

export default App;

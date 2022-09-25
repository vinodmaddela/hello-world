import logo from './logo.svg';
import './App.css';
import ExampleComponent, {AnotherComponent} from './components/ExampleComponent';
import Greeting from './components/Greetings';
import SongList from './components/SongList';

function App() {
  return (
    <div className="App">
      <ExampleComponent />
      <AnotherComponent />
      <Greeting name="Matt" age="23" />
      <Greeting name="Vinod" age="43" />
      <p className="firstPara" >This is another paragraph</p>
      <SongList />
    </div>
  );
}

export default App;

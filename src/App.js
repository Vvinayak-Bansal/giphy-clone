import './App.css';
import Header from "./components/Header.js"
import SearchContainer from './components/SearchContainer';
import Media from './components/Media';
function App() {
  return (
    <div className="app">
      <div className='main'>
        <Header />
        <SearchContainer />
        <Media/>
      </div>
    </div>
  );
}

export default App;

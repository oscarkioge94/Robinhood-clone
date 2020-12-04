import './App.css';
import Header from './components/userInterface/Header';
import NewsFeed from './components/userInterface/NewsFeed';
import Stats from './components/userInterface/Stats';

function App() {
  return (
    <div className="app">
      <div className="app__header">
      <Header/>
      </div>
      <div className="app__body">
      <div className="app__container">
      <NewsFeed/>
      <Stats/>
      </div>
      </div>
      
       
    </div>
  );
}

export default App;

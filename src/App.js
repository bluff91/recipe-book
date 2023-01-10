import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//pages components
import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Navbar from './components/Navbar';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/recipe-book'>
            <Home />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/recipes/:_id'>
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>  
    </div>
  );
}

export default App;

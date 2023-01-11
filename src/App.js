import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
        <Routes>
          <Route path='/recipe-book' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/search' element={<Search />} />
          <Route path='/recipes/:_id' element={<Recipe />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './pages/home/Home';
import MovieList from './component/Movielist/MovieList';
import Movie from './pages/MovieDetail/Movie';
import Search from "./component/SearchPage/Search"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='movie/:id' element={<Movie />}></Route>
          <Route path='movies/:type' element={<MovieList />}></Route>
          <Route path='search/:movie' element={<Search />}></Route>
          <Route path='/*' element={<h1> Wrong Page</h1>}></Route>
        </Routes>
      </BrowserRouter>
      <div className="copyright">Developed by Saiyam Jain • 2023</div>

    </div>
  );
}

export default App;

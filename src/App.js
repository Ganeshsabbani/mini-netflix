import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import MovieDetail from './pages/MovieDetail';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/movie/details" element={ <MovieDetail /> } />
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;

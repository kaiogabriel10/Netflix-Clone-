import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home'
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/pesquisar' element={ <Search/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

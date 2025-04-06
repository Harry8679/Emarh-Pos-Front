import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Items from './pages/Items';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/items' element={<Items />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
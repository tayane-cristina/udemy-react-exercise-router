import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';


//COMPONENTS

//PAGES
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Style from './pages/Style'
import Table from './pages/Table'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/style' element={<Style />}/>
          <Route path='/table' element={<Table />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

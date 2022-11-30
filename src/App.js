
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter className='overflow-x-none'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

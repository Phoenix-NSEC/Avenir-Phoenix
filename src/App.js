import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Aboutus from './pages/About/Aboutus';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;

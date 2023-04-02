import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Aboutus from './pages/About/Aboutus';
import Contact from './pages/Contact/Contact';
import Team from './pages/Team/Team';
import Patners from './pages/Patners/Patners';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/patners' element={<Patners/>}/>
        <Route path='/teams' element={<Team/>}/>
      </Routes>
    </>
  );
}

export default App;

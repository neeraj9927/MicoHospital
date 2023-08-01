import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import { Route, Routes } from 'react-router-dom';

import Abouts from './Components/Abouts';
import BackToTopBtn from './Components/BackToTopBtn';
import Contact from './Components/Contact';
import Doctors from './Components/Doctors';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Hospital_Traitment from './Components/Hospital_Traitment';
import Navbar from './Components/Navbar';
import Testamonils from './Components/Testamonils';

const App = () => {
  return (
    <>
    <BackToTopBtn/>
     <Navbar/>  
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='About' element={<Abouts/>}/>
      <Route path='Treatment' element={<Hospital_Traitment/>}/>
      <Route path='doctors' element={<Doctors/>}/>
      <Route path='testimonis' element={<Testamonils/>}/>
      <Route path='contact' element={<Contact/>}/>
     </Routes>
     <Footer/>
    </>
       
  )
}

export default App


import './App.css';

import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Resume } from './components/Resume';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';



import { BrowserRouter, Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/Banner' element={<Banner />} />
          <Route path='/Resume' element={<Resume />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='*' element={<Banner />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;









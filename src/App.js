
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
    
      <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/banner' element={<Banner />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Banner />} />
        </Routes>
        <Footer />
        </div>
      </BrowserRouter>
    
  );
}

export default App;









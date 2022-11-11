

import {  Route, Redirect, withRouter } from 'react-router-dom';

import { NavBar } from './NavBar';
import { Banner } from './Banner';
import { Resume } from './Resume';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Footer } from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
    return (

        <div className='Main'>
            <NavBar />
                <Route  path='/Banner' element={<Banner/>} />
                <Route  path='/Resume' element={<Resume/>} />
                <Route  path='/Skills' element={<Skills/>} />
                <Route  path='/Projects' element={<Projects/>} />
                <Route  path='/Contact' element={<Contact/>} />
                <Redirect to='/Banner' />
            <Footer />
        </div>
    )
}

export default (Main);
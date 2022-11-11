

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

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
            <Switch>
                <Route exact path='/Banner' component={Banner} />
                <Route exact path='/Resume' component={Resume} />
                <Route exact path='/Skills' component={Skills} />
                <Route exact path='/Projects' component={Projects} />
                <Route exact path='/Contact' component={Contact} />
                <Redirect to='/Banner' />
            </Switch>
            <Footer />
        </div>
    )
}

export default withRouter(Main);
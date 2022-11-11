
import './App.css';

import Main from './components/Main';
import { BrowserRouter, HashRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <HashRouter>
      <Main/>
      </HashRouter>
    </div>
  );
}

export default App;

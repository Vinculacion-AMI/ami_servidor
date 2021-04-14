import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Draw from './pages/Draw';
import Draw2 from './pages/Draw2';
import Levels from './pages/Levels';
import Login from './pages/Login';
import Registro from './pages/Registro';
import JigSaw from "./pages/draggable/Jigsaw";
import ButtonAppBar from './pages/components/Navigation';
import Puntajes from './pages/puntajes';
import Resultados from './pages/resultados';


function App() {
  return (
    <div>
      <ButtonAppBar/>
    <Router>
      <Route path="/" name="/" exact component={Login} />
      <Route path="/singIn" name="/singIn" component={Registro} />
      <Route path="/levels" name="/levels" component={Levels} />
      <Route path="/draw" name="/draws" component={Draw} />
      <Route path="/draw2" name="/draws2" component={Draw2} />
      <Route path="/puzzle" name="/puzzle" component={JigSaw} />
      <Route path="/puntajes" name="/puntajes" component={Puntajes} />
      <Route path="/resultados" name="/resultados" component={Resultados} />

     </Router>
    </div>
   
   
  );
}

export default App;

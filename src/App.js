import React from 'react';
import { BrowserRouter, Route, Switch,  } from 'react-router-dom';
import ROUTES from './utils';
import Home from './components/Home';
import { Navbar } from './components/commons/NavBar';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Navbar />
      <Route exact path={ROUTES.home} component={Home} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;

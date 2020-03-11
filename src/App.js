import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ROUTES from "./utils";
import { Home } from "./components/home";
import Tasks from './components/tasks';
import Deals from './components/deals';
import Contacts from './components/contacts';
import Sales from "./components/sales";
import { Navbar } from "./components/commons/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={ROUTES.home} component={Home} />
        <Route exact path={ROUTES.tasks} component={Tasks} />
        <Route exact path={ROUTES.sales} component={Sales} />
        <Route exact path={ROUTES.deals} component={Deals} />
        <Route exact path={ROUTES.contacts} component={Contacts} />
        <Route exact path={ROUTES.home} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

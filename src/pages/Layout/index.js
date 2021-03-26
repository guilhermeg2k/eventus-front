import React from 'react';
import Home from '../Home';
import Event from "../Event";
import Footer from "../../components/Footer";
import TopBar from '../../components/TopBar';
import CRUD from "../CRUD";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function Layout() {
  return (
    <Router>
      <TopBar/>
      <main>
        <Switch>
        <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/event/:id">
            <Event/>
          </Route>
          <Route path="/crud">
            <CRUD/>
          </Route>
        </Switch>
        <Footer/>
      </main>
    </Router>
  );
}


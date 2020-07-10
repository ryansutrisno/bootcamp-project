import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Header from './components/Header';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import IndecisionPage from './components/IndecisionPage';
import CelciusToFarnheit from './components/CelciusToFarnheit';
import Footer from './components/Footer';
import NotFoundPage from './components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <div className="App-header">
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/about" component={AboutPage} exact={true} />
        <Route path="/contact" component={ContactPage} exact={true} />
        <Route
          path="/aplikasi-keputusan"
          component={IndecisionPage}
          exact={true}
        />
        <Route
          path="/conversi-suhu"
          component={CelciusToFarnheit}
          exact={true}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;

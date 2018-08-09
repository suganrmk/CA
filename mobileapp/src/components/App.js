import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './template/header';
import Sidebar from './template/sidebar';

import Home from '../containers/home';

import client from './pages/client';
import Addclient from '../containers/addclient';
import ClientDetail from './pages/clientdetail';



class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div className="adminview">
          <div className="sidebar">
            <Sidebar />
          </div>
          <Header></Header>
          <div className="maincontent">
           
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/clientList" component={client} />
              <Route exact path="/addclient" component={Addclient} />
              <Route exact path="/contact/:id" component={ClientDetail} />
            </Switch>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;

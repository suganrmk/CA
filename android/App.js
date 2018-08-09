import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './src/reducers';
import Landing from './src/components/Landing'; //Import the component file

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);


export default class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Landing />  
      </Provider>
    );   
  }
}     
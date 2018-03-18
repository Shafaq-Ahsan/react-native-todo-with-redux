import React, { Component } from 'react';
import { TodoContainer } from './app/containers/TodoContainer'
import { Provider } from 'react-redux';
import { store } from './app/stores/Store';

export default class App extends Component {
 
  render() {
    return (
      <Provider store={store}>
      <TodoContainer/>     
      </Provider>
    );
  }
}


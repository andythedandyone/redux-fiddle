import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Display from './components/Display';
import reduce from './reducers';


const store = createStore(reduce);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Display />
      </Provider>
    );
  }
}

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Todo from '../Todo/TodoContainer';

const App = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
);

export default App;

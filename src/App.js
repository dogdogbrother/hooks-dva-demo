import React from 'react';
import { Provider } from 'react-redux';
import store from './config/dva';
import Add from './add'
import Base from './base'

function App() {
  return (
    <Provider store={store}>
      <Base />
      <br/>
      <br/>
      <br/>
      <Add />
    </Provider>
  );
}

export default App;

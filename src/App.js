import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const App = () => {
  return(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
      
      </BrowserRouter>
    </Provider>
  )
}

export default App;
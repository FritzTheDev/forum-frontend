import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const App = () => {
  return(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/signup" component={SignupComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route exact path="/" component={HomeComponent} />

          </Switch>

        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
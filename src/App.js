import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { SignupPage } from './pages'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const App = () => {
  return(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/signup" component={SignupPage} />
            <Route path="/login" component={LoginPage} />
            <Route exact path="/" component={HomePage} />

          </Switch>

        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
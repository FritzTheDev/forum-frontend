import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { SignupPage, LoginPage, HomePage, ThreadPage } from './pages'
import { Navbar } from './components';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const App = () => {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/signup" component={SignupPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/thread/:thread_id" component={ThreadPage} />
            <Route exact path="/" component={HomePage} />
            {/* profile */}
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
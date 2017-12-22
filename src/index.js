import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import registerServiceWorker from './lib/registerServiceWorker';

/* ----- Reducers ----- */
import reducers from './reducers';

/* Containers */
import App from './containers/App';

/* Sassy */
import './styles/index.scss';

/* ----- STORE ----- */
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);


/* JSX */
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={ App } />
      </div>
    </Router>
  </Provider>,

  document.getElementById('root')
);

registerServiceWorker();

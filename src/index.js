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
import Artwork from './containers/Artwork';
import Design from './containers/Design';
import MotoTrip from './containers/MotoTrip';
import Undertow from './containers/Undertow';
import Hawaii from './containers/Hawaii';

/* Sassy */
import './index.css';

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
        <Route exact path="/artwork" component={ Artwork } />
        <Route exact path="/design" component={ Design } />
        <Route exact path="/artwork/moto" component={ MotoTrip } />
        <Route exact path="/artwork/undertow" component={ Undertow } />
        <Route exact path="/artwork/hawaii" component={ Hawaii } />
      </div>
    </Router>
  </Provider>,

  document.getElementById('root')
);

registerServiceWorker();

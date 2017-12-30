import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './reset.css';
import './index.css';
import HomeUK from './components/UK/Home';

import registerServiceWorker from './registerServiceWorker';

import './i18n';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/en/home" />
        <Route path="/en/home" component={HomeUK} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './reset.css';
import './index.css';
import './i18n';
import HomeUK from './components/UK/Home';
import registerServiceWorker from './registerServiceWorker';

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

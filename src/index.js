import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './reset.css';
import './index.css';
import HomeUK from './components/UK/Home';
import HomeDK from './components/DK/Home';
import HomeNO from './components/NO/Home';
import HomeSE from './components/SE/Home';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/en/home" />
        <Route path="/en/home" component={HomeUK} />
        <Route path="/dk/home" component={HomeDK} />
        <Route path="/no/home" component={HomeNO} />
        <Route path="/se/home" component={HomeSE} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

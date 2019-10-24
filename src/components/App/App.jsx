import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Reader from '../Reader/Reader';

const App = () => (
  <Switch>
    <Route path="/reader" component={Reader} />
    <Route path="/:random">
      <Redirect to="/reader" component={Reader} />
    </Route>
    <Redirect exact from="/" to="/reader" component={Reader} />
  </Switch>
);

export default App;

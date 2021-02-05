import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Mat4 from './activities/mat4/Mat4';
import Jar15 from './activities/jar15/Jar15';
import Pre14 from './activities/pre14/Pre14';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Mat4 />
        </Route>
        <Route exact path='/jar15'>
          <Jar15 />
        </Route>
        <Route exact path='/pre14'>
          <Pre14 />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

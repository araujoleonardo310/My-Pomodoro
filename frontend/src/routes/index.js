import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Reset from '../pages/Reset';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/reset" component={Reset} />
      </Switch>
    </Router>
  );
};

export default Routes;

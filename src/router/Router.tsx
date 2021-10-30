import { Switch, Route } from 'react-router-dom';
import { Home } from 'src/pages';

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

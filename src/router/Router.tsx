import { Switch, Route } from 'react-router-dom';
import { Layout } from 'src/components';
import { Tasks } from 'src/pages';

import { Routes } from './Routes';

export const Router = () => {
  return (
    <Switch>
      <Layout>
        <Route exact path={Routes.Tasks} component={Tasks} />
      </Layout>
    </Switch>
  );
};

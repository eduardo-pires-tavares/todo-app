import { Switch, Route } from 'react-router-dom';
import { Layout } from 'src/components';
import { Home } from 'src/pages';

export const Router = () => {
  return (
    <Switch>
      <Layout>
        <Route exact path="/" component={Home} />
      </Layout>
    </Switch>
  );
};

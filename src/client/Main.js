import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import NotFound from './NotFound';
import MapAllowedRoutes from './MapAllowedRoutes';

const Main = () => {
  const computedRoutes = routes.map(({ path, exact, component: C, ...rest }) => (
    <Route key={path} path={path} exact={exact} render={props => <C {...props} {...rest} />} />
  ));
  return (
    <main>
      <Switch>
        <MapAllowedRoutes routes={routes}/>
        <Route render={props => <NotFound {...props} />} />
      </Switch>
    </main>
  );
};

export default Main;

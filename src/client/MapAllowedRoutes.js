import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';

/*
* This is the route utility component used for generating
* routes and child routes it only requires routes array and basePath
*/
function MapAllowedRoutes({routes}) {
	//const match = useRouteMatch(basePath);
	return (
		<Switch>
			{routes.map(({ path, exact, component: C, ...rest }) => (
                <Route key={path} path={path} exact={exact} render={props => <C {...props} {...rest} />} />
            ))}
			<Route render={props => <NotFound {...props} />} />
		</Switch>
	)
}

export default memo(MapAllowedRoutes);

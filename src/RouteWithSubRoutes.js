import React from 'react'
import { Route } from 'react-router-dom'

function RouteWithSubRoutes(route) {
    return (
        <Route
            exact
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        >
            {route.component}
        </Route>
    );
}

export default RouteWithSubRoutes;
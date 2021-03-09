import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function RouteContainer({ component: Component, history, noPublic, ...rest }) {
  var logged = false;
  if (localStorage.getItem('jwt')) {
    logged = true;
  }
  if (!logged && noPublic) {
    return <Redirect to="/" />;
  }

  if (logged && !noPublic) {
    return <Redirect to="/home" />;
  }
  return <Route {...rest} noPublic history component={Component} />;
}

export default RouteContainer;

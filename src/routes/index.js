import React, { useEffect, useContext } from 'react';
import { Home, Login, Album } from '../Pages';
import Route from './route';

function Routes() {
  return (
    <>
      <Route exact path="/" component={Login} />
      <Route path="/home" noPublic component={Home} />
      <Route path="/albums/:artist" noPublic component={Album} />
    </>
  );
}

export default Routes;

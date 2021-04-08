import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import React, { useCallback, useContext, useState } from 'react';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

import './App.css';
import UpdatePlace from './places/pages/UpdatePlace';
import UserPlaces from './places/pages/UserPlaces';
import Auth from './user/pages/Auth';
import { AuthContext } from './shared/context/Auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = useContext(AuthContext);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;
  if (auth.isLoggedIn) {
    routes = (<Switch>
      <Route path="/" exact>
        <Users />
      </Route>
      <Route path="/:userId/places" exact>
        <UserPlaces />
      </Route>
      <Route path="/places/new" exact>
        <NewPlace />
      </Route>
      <Route path={`/places/:placeId`}>
        <UpdatePlace />
      </Route>
      <Redirect to="/" />
    </Switch>);
  } else {
    routes = (<Switch>
      <Route path="/" exact>
        <Users />
      </Route>
      <Route path="/:userId/places" exact>
        <UserPlaces />
      </Route>
      <Route path="/auth" component={Auth} />
      <Redirect to="/auth" />
    </Switch>);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            {routes}
          </Switch>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Authpage from "./pages/Authpage";
import MainPage from "./pages/MainPage";
const useRoutes = (isAuth: boolean) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/">
        <Authpage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default useRoutes;

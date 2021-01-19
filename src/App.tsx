import React, { useCallback, useState } from "react";
import Theme from "./theme";

import { CssBaseline, useMediaQuery } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import useRoutes from "./routes";
import MainContext from "./context";

function App() {
  const tablet = useMediaQuery("(min-width:1024px)");
  const mobile = useMediaQuery("(min-width:640px)");
  let [isAuth, setAuth] = useState(true);
  const pages = useRoutes(isAuth);
  const [createdProject, setCreatedProject] = useState(false);
  const [mobileDrawer, setmobileDrawer] = useState(false);
  const finishCreateProject = useCallback(() => {
    setCreatedProject(false);
  }, [createdProject]);
  const openCreateProject = useCallback(() => {
    setCreatedProject(true);
  }, [createdProject]);

  const openDrawer = useCallback(() => {
    setmobileDrawer(true);
  }, [mobileDrawer]);
  const closeDrawer = useCallback(() => {
    setmobileDrawer(false);
  }, [mobileDrawer]);

  const login = useCallback(() => {
    setAuth(!isAuth);
  }, [isAuth]);
  return (
    <Router>
      <Theme>
        <CssBaseline>
          <MainContext
            value={{
              tablet,
              mobile,
              openDrawer,
              closeDrawer,
              isAuth,
              mobileDrawer,
              login,
              createdProject,
              finishCreateProject: finishCreateProject,
              openCreateProject: openCreateProject,
            }}
          >
            {pages}
          </MainContext>
        </CssBaseline>
      </Theme>
    </Router>
  );
}
export default App;

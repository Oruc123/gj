import React from "react";
import { useStyles } from "./DrawerMenu/Atom";
import Header from "./Header";
import DrawerMenu from "./DrawerMenu";
import MainContent from "./MainContent";
import { Route, Switch } from "react-router-dom";
import LocationContent from "./LocationContent";
import LocationEdit from "./LocationEdit";
import Presence from "./Presence";
import Reviews from "./Reviews";
import Footer from "../Footer";
import Import from "../CreateProjectSteps/Import";
export default function DashBoard() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Header />
        <DrawerMenu />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/">
              <MainContent />
            </Route>
            <Route path="/location">
              <LocationContent />
            </Route>
            <Route path="/edit">
              <LocationEdit />
            </Route>
            <Route path="/reviews">
              <Reviews />
            </Route>
            <Route path="/presence">
              <Presence />
            </Route>
            <Route path="/import">
              <Import />
            </Route>
          </Switch>
        </main>
      </div>
      <Footer />
    </>
  );
}

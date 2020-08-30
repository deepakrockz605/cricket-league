import React from "react";
import { Route, Switch } from "react-router";
import Dashboard from "./Dashboard";
import PageNotFound from "./PageNotFound";
import Teams from "./Teams";
import AllPlayers from "./AllPlayers";
import PointsTable from "./PointsTable";
import Matches from "./Matches";
import Venue from "./Venue";
import TeamPlayers from "./TeamPlayers";
import PlayerProfile from "./PlayerProfile";
import MatchSummary from "./MatchSummary";
import Home from "./Home";

function RestrictedContainer(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/teams" component={Teams} />
      <Route exact path="/team-players" component={TeamPlayers} />
      <Route exact path="/all-players" component={AllPlayers} />
      <Route exact path="/player-profile" component={PlayerProfile} />
      <Route exact path="/venues" component={Venue} />
      <Route exact path="/points-table" component={PointsTable} />
      <Route exact path="/matches" component={Matches} />
      <Route exact path="/match-summary" component={MatchSummary} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
}

export default RestrictedContainer;

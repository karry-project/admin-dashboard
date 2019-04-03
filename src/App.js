import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./features/LoginPage";
import HomePage from "./features/HomePage";
import Layout from "./components/Layout";
import UsersPage from "./features/UsersPage";
import TripsTable from "./features/trips/TripsTable";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={LoginPage} />
        {this.props.loggedIn ? (
          <Layout>
            <Route path="/dashboard" component={HomePage} />
            <Route path="/users" component={UsersPage} />
            <Route path="/trips" component={TripsTable} />
          </Layout>
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    );
  }
}

export default App;

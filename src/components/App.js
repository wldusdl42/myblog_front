import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../pages/login/Login.js';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { HashRouter } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from "../actions/auth.js";

import "../styles/app.scss";

const PrivateRoute = ({ dispatch, component, ...rest }) => {
  if (!Login.isAuthenticated(JSON.parse(localStorage.getItem("authenticated")))) {
    dispatch(logoutUser());
    // return (<Redirect to="/login" />)
    return (
      <Route { ...rest } render={props => (React.createElement(component, props))} />
    )
  } else {
    return (
      <Route { ...rest } render={props => (React.createElement(component, props))} />
    );
  }
};

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
          <PrivateRoute path="/" dispatch={this.props.dispatch} component={Login} />
            <Route path="/" exact component={Login} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);

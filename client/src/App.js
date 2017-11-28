import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, withRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import { fetchPerfume, deletePerfume, getRecommendation } from  './actions/perfumesActions';
import { logOut } from './actions/userActions';
import './App.css';
import NavBarContainer from './containers/NavBarContainer';
import PerfumesListContainer from './containers/PerfumesListContainer';
import RecommendationsContainer from './containers/RecommendationsContainer';
import SavedContainer from './containers/SavedContainer';
import SignInContainer from './containers/SignInContainer';
import LogInContainer from './containers/LogInContainer';
import { Button, Container, Segment, Menu } from 'semantic-ui-react'

class App extends Component {
  render() {
    // {debugger};
    return (
      <Router>
        <div>
          <NavBarContainer />
          <Route exact path="/" component={PerfumesListContainer} />
          <Route exact path="/signin" component={SignInContainer} />
          <Route exact path="/users/login" component={LogInContainer} />
          <RecommendationsContainer />
          <Route exact path="/savedrecommendations" component={SavedContainer} />
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logOut: logOut,
    fetchPerfume: fetchPerfume
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(App);

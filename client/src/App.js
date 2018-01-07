import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, withRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import { fetchPerfume, deletePerfume, getRecommendation } from  './actions/perfumesActions';
import { logOut } from './actions/userActions';
import './App.css';

import './semantic-ui/dist/semantic.min.css';
import './styles.global.scss';

import NavBarContainer from './containers/NavBarContainer';
import PerfumesListContainer from './containers/PerfumesListContainer';
import RecommendationsContainer from './containers/RecommendationsContainer';
import SavedContainer from './containers/SavedContainer';
import SignInContainer from './containers/SignInContainer';
import LogInContainer from './containers/LogInContainer';
import { Button } from './semantic-ui/dist/components/button.min.css';
import { Container } from './semantic-ui/dist/components/container.css';
import { Segment } from './semantic-ui/dist/components/segment.min.css';
import { Menu } from './semantic-ui/dist/components/.min.css';

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
          <Route exact path="/recommendations" component={RecommendationsContainer} />
          <Route path="/savedrecommendations" component={SavedContainer} />
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

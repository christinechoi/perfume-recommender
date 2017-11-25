import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { fetchPerfume, deletePerfume, getRecommendation } from  './actions/perfumesActions';

import './App.css';
import Navbar from './components/Navbar';
import PerfumesListContainer from './containers/PerfumesListContainer';
import RecommendationsContainer from './containers/RecommendationsContainer';
import SavedContainer from './containers/SavedContainer';
import SignInContainer from './containers/SignInContainer';
import { Button, Container, Segment, Menu } from 'semantic-ui-react'



class App extends Component {


  handleClick = event => {
    event.preventDefault();
    {debugger};
    
    window.history.pushState(window.history.state, 'http://localhost/3000/savedrecommendations')
  }

  render() {
    return (

      
      <Router>
        <div>

        <Container >
          <Menu compact>
            <Menu.Item 
              as={Link} 
              to='/'
              name='Home'
            >Home
            </Menu.Item>

            <Menu.Item
              as={Link}
              to='/recommendations'
              name='All Saved Recommendations'>
              All Saved Recommendations
            </Menu.Item>

            <Menu.Item
              name='upcomingEvents'>
              Upcoming Events
            </Menu.Item>
          </Menu></Container>
          <Route exact path="/" component={PerfumesListContainer} />
          <Route exact path="/signin" component={SignInContainer} />
          <Route exact path="/recommendations" component={RecommendationsContainer} />
          <Route exact path="/savedrecommendations" component={SavedContainer} />
        </div>
      </Router>

    );
  }
}

const mapStateToProps = (state) => { 
  // {debugger};
  return { 
    perfumes: state.perfumes.perfumes,
    selectedPerfumes: state.perfumes.selectedPerfumes,
    recommendations: state.perfumes.recommendations,
    basedOn: state.perfumes.basedOn
   };
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPerfume: fetchPerfume,
    getRecommendation: getRecommendation,
    deletePerfume: deletePerfume
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

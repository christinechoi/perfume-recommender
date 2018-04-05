import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, withRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import { logOut } from '../actions/userActions';
import { fetchSavedRecs } from '../actions/perfumesActions';
import { Button, Container, Segment, Menu } from 'semantic-ui-react'

class NavBarContainer extends Component {
  

  handleLogout = event => {
    event.preventDefault();
    const { logOut, history } = this.props;
    logOut(this.state);
    history.push('/')
  }

  handleClick = event => {
    event.preventDefault();
    const { fetchSavedRecs, history } = this.props;
    fetchSavedRecs(this.state);
    history.push('/savedrecommendations')
  }
  
  render() {
    {debugger};
    return (
      <div>
        <Container >
          <Menu compact>
            <Menu.Item 
              as={Link} 
              to='/'
              name='Home'
            >Home
            </Menu.Item>

            { this.props.isAuthenticated ?            
            <Menu.Item
              onClick={this.handleClick.bind(this)}
              
              name='All Saved Recommendations'>
              All Saved Recommendations
            </Menu.Item> : null
            }

            { this.props.isAuthenticated ? null :
            
            <Menu.Item
              as={Link}
              to='/signin'
              name='signup'>
              Sign Up 
            </Menu.Item>
            }

            { this.props.isAuthenticated ? null : 
            <Menu.Item
              as={Link}
              to='/users/login'
              name='login'>
              Log In 
            </Menu.Item>
            }

            { this.props.isAuthenticated ? 
            <Menu.Item
              onClick={this.handleLogout.bind(this)}
              name='logout'>
              Log Out
            </Menu.Item> : null }

          </Menu>
        </Container>
      </div>
  )}
}

const mapStateToProps = (state) => { 
  return { 
    isAuthenticated: state.user.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logOut: logOut,
    fetchSavedRecs: fetchSavedRecs
  }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBarContainer));




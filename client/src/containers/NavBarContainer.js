import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, withRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import { logOut } from '../actions/userActions';
import { Button, Container, Segment, Menu } from 'semantic-ui-react'

class NavBarContainer extends Component {
  constructor(props) {
    super(props); {

      this.state = {
        isAuthenticated: this.props.isAuthenticated
      }
    }
  }

  handleLogout(event) {
    event.preventDefault();
    {debugger};
    this.props.logOut();
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

            { this.state.isAuthenticated ? 
            <Menu.Item
              as={Link}
              to='/recommendations'
              name='All Saved Recommendations'>
              All Saved Recommendations
            </Menu.Item> : null }

            { this.state.isAuthenticated ? null :
            <Menu.Item
              as={Link}
              to='/signin'
              name='signup'>
              Sign Up 
            </Menu.Item>
            }

            { this.state.isAuthenticated ? null : 
            <Menu.Item
              as={Link}
              to='/users/login'
              name='login'>
              Log In 
            </Menu.Item>
            }

            { this.state.isAuthenticated ? 
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
  {debugger};
  return { 
    isAuthenticated: state.user.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
 
  return bindActionCreators({
    logOut: logOut
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);




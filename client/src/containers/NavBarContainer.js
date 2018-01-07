import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, withRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import { logOut } from '../actions/userActions';
import { Button, Container, Segment, Menu } from 'semantic-ui-react'
// import { Button } from '../semantic-ui/dist/components/button.min.css';
// import { Container } from '../semantic-ui/dist/components/container.css';
// import { Segment } from '../semantic-ui/dist/components/segment.min.css';
// import { Menu } from '../semantic-ui/dist/components/menu.min.css';
import '../styles.global.scss';


class NavBarContainer extends Component {
  constructor(props) {
    super(props); {

      this.state = {
        isAuthenticated: this.props.isAuthenticated
      }
    }
  }


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
    //{debugger};
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
            to='/savedrecommendations'
            name='savedrecommendations'
             
              
            name='All Saved Recommendations'>
              All Saved Recommendations
            </Menu.Item> : null
            }

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

// onClick={this.handleClick.bind(this)}

const mapStateToProps = (state) => { 
  return { 
    isAuthenticated: state.user.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logOut: logOut
  }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBarContainer));




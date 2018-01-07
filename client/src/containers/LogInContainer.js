import React, { Component } from 'react';

import { Grid, Form, Button, Container, Menu } from '../styles.global.scss'//'semantic-ui-react';
// import { Grid } from '../semantic-ui/dist/components/grid.min.css';
// import { Button } from '../semantic-ui/dist/components/button.min.css';
// import { Form } from '../semantic-ui/dist/components/header.css';
// import { Container } from '../semantic-ui/dist/components/container.min.css';

import { logIn, logOut } from '../actions/userActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';

class LogInContainer extends Component {
  constructor(props) {
    super(props); {

      this.state = {
        email: '',
        password: ''
      }
    }
  } 

  handleOnSubmit = event => {
    event.preventDefault();
    const { logIn, history } = this.props;
    logIn(this.state);
    history.push('/')
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {

    return (
      
      <div>
        <Form onSubmit={this.handleOnSubmit.bind(this)} >
          <Form.Field>
            <label>Email</label>
            <input 
              type="email" 
              name="email"
              onChange={this.handleChange.bind(this)}   />
          </Form.Field> 

          <Form.Field>
            <label>Password</label>
            <input 
              type="password"
              name="password" 
              onChange={this.handleChange.bind(this)} />
          </Form.Field>

          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logIn: logIn,
    logOut: logOut     
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(LogInContainer);

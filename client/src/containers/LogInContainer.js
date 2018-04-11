import React, { Component } from 'react';
import { Grid, Form, Button, Container, Menu } from 'semantic-ui-react';
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
        <Container>
          <h1></h1>
          <Form onSubmit={this.handleOnSubmit.bind(this)} >
            <Form.Field width={3}>
              <label>Email</label>
              <input 
                type="email" 
                placeholder='Email' 
                name="email"
                onChange={this.handleChange.bind(this)}   />
            </Form.Field> 
            <Form.Field width={3}>
              <label>Password</label>
              <input 
                type="password"
                placeholder='Password' 
                name="password" 
                onChange={this.handleChange.bind(this)} />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        </Container>
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

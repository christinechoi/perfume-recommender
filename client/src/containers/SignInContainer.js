import React, { Component } from 'react';

// import { Grid, Form, Button } from 'semantic-ui-react';
import { Grid } from '../semantic-ui/dist/components/grid.min.css';
import { Button } from '../semantic-ui/dist/components/button.min.css';
import { Form } from '../semantic-ui/dist/components/form.css';
import { Segment } from '../semantic-ui/dist/components/segment.min.css';


import { signIn } from '../actions/userActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SignInContainer extends Component {
  constructor(props) {
    super(props); {

      this.state = {
        email: '',
        password: ''
      }
    }
  }

  handleOnSubmit(event) {
    event.preventDefault();
    {debugger};
    this.props.signIn(this.state);
  }

  handleLogin(event) {
    event.preventDefault();
    {debugger};
    this.props.LogIn(this.state);
    this.props.history.push('/users/login')
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
    signIn: signIn       
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(SignInContainer);

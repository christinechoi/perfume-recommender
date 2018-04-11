import React, { Component } from 'react';
import { Grid, Form, Button, Container} from 'semantic-ui-react';
import { signIn } from '../actions/userActions';
import { SignIn } from '../components/SignIn';
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

      <Container>
        <h1></h1>
        <Form onSubmit={this.handleOnSubmit.bind(this)} >
          
          <Form.Field width={3} >
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
    signIn: signIn       
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(SignInContainer);

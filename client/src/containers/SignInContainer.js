import React, { Component } from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';




class SignInContainer extends Component {
  constructor(props) {
    super(props); {

      this.state = {
        value: ''
      }
    }
  }

  handleOnSubmit(event) {
    event.preventDefault();
    {debugger};
    this.props.createUser(event);
  }



  render() {


 // <Form className="ui segment"
 //                  size='big'
 //                  onSubmit={(event) => this.handleOnSubmit(event)}>
 //                  <Form.Field className='ui center aligned'></Form.Field >
 //                  <Form.Input 
 //                    icon='search'
 //                    iconPosition='left'
 //                    value={this.state.value}
 //                    onChange ={this.handleChange}
 //                    type="text" />

 //                  <Form.Button color='teal' size='massive' fluid > Search for Perfume </Form.Button>

 //                </Form>
    return (
      
      <div>

        <Form>
          <Form.Field>
            <label>Email</label>
            <input placeholder='Email address' />
          </Form.Field> 

          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' />
          </Form.Field>

          <Button type='submit'>Submit</Button>

        </Form>
      </div>
    )
  }


}

export default SignInContainer;

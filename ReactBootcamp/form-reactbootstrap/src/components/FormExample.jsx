import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class FormExample extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
      email: '',
      password: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ 
        value: e.target.value,
        email: e.target.email,
        password: e.target.password
    });
  }

  render() {
    return (
      <form>
        <FormGroup          
          validationState={this.getValidationState()}
        >
          <ControlLabel>Name </ControlLabel>
          <FormControl
            id="formname"
            type="text"
            value={this.state.value}
            placeholder="Enter name"
            onChange={this.handleChange}
          />
          <ControlLabel>Email </ControlLabel>
          <FormControl
            id="formemail"
            type="email"
            value={this.state.email}
            placeholder="Enter email"
            onChange={this.handleChange}
          />
          <ControlLabel>Password </ControlLabel>
          <FormControl
            id="formpassword"
            type="password"
            value={this.state.password}
            placeholder="Enter password"
            onChange={this.handleChange}
          />
          <Button bsStyle="primary" type="submit">Submit</Button>
        </FormGroup>
      </form>
      
    );
  }
}

export default FormExample;
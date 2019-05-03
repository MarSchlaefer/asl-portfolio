import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'


class Contact extends Component {

  state = {
    name: '',
    message: '',
    email: '',
    sent: false,
    buttonText: 'Send Message'
}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <div className="contact" id="contact">
        <div className="page-title">
          <h1>Contact Me!</h1>
        </div>
        <Form className="contact-form">
          <Form.Group widths='equal'>
            <Form.Input fluid label='First name' placeholder='First name' />
            <Form.Input fluid label='Last name' placeholder='Last name' />
          </Form.Group>
          <Form.Group inline>
            <label>Size</label>
            <Form.Radio
              label='Small'
              value='sm'
              checked={value === 'sm'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Medium'
              value='md'
              checked={value === 'md'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Large'
              value='lg'
              checked={value === 'lg'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.TextArea label='About' placeholder='Tell us more about you...' />
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default Contact;

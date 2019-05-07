import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';


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
          <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
            <label class="message" htmlFor="message-input">Your Message</label>
            <textarea onChange={e => this.setState({ message: e.target.value})} name="message" class="message-input" type="text" placeholder="Please write your message here" value={this.state.message} required/>

            <label class="message-name" htmlFor="message-name">Your Name</label>
            <input onChange={e => this.setState({ name: e.target.value})} name="name" class="message-name" type="text" placeholder="Your Name" value={this.state.name}/>

            <label class="message-email" htmlFor="message-email">Your Email</label>
            <input onChange={(e) => this.setState({ email: e.target.value})} name="email" class="message-email" type="email" placeholder="your@email.com" required value={this.state.email} />

            <div className="button--container">
                <button type="submit" className="button button-primary">{ this.state.buttonText }</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;

        // <Form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
        //   <Form.Group widths='equal'>
        //     <Form.Input 
        //     fluid 
        //     label='Your name' 
        //     placeholder='Your name' 
        //     class="message-name" 
        //     htmlFor="message-name" 
        //     value={this.state.name}
        //     onChange={e => this.setState({ name: e.target.value})}
        //     />
        //   </Form.Group>
        //   <Form.Group widths='equal'>
        //     <Form.Input fluid label='Email' placeholder='Email' />  
        //   </Form.Group>
        //   <Form.Group inline>
        //     <label>Preferred form of contact</label>
        //     <Form.Radio
        //       label='Phone'
        //       value='phone'
        //       checked={value === 'phone'}
        //       onChange={this.handleChange}
        //     />
        //     <Form.Radio
        //       label='Email'
        //       value='email'
        //       checked={value === 'email'}
        //       onChange={this.handleChange}
        //     />
        //   </Form.Group>
        //   <Form.Input fluid label='Subject' placeholder='Email subject' />
        //   <Form.TextArea label='Content' placeholder='Email content'/>
        //   <Form.Checkbox label='I agree to the Terms and Conditions' />
        //   <Form.Button>Submit</Form.Button>
        // </Form>
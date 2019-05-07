import React, { Component } from 'react';
import axios from 'axios';


class Contact extends Component {

  state = {
    name: '',
    message: '',
    email: '',
    sent: false,
    buttonText: 'Send Message'
}

  render() {
    return (
      <div className="contact" id="contact">
          <div className="page-title">
            <h1>Contact Me!</h1>
            <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
              <label className="message-name" htmlFor="message-name">Your Name</label>
              <input onChange={e => this.setState({ name: e.target.value})} name="name" className="message-name" type="text" placeholder="Your Name" value={this.state.name}/>
              
              <label className="message-email" htmlFor="message-email">Your Email</label>
              <input onChange={(e) => this.setState({ email: e.target.value})} name="email" className="message-email" type="email" placeholder="your@email.com" required value={this.state.email} />
              
              <label className="message" htmlFor="message-input">Your Message</label>
              <textarea onChange={e => this.setState({ message: e.target.value})} name="message" className="message-input" type="text" placeholder="Please write your message here" value={this.state.message} required/>
              
              <div className="button--container">
                  <button type="submit" className="button button-primary">{ this.state.buttonText }</button>
              </div>
            </form>
          </div>
        </div>
      )
    }
    
    formSubmit = (e) => {
      e.preventDefault()
    
      this.setState({
          buttonText: '...sending'
      })
    
      let data = {
          name: this.state.name,
          email: this.state.email,
          message: this.state.message
      }
      
      axios.post('https://localhost:4444/api/v1', data)
      .then( res => {
          this.setState({ sent: true }, this.resetForm())
      })
      .catch( () => {
        console.log('Message not sent')
      })
    }

    resetForm = () => {
      this.setState({
          name: '',
          message: '',
          email: '',
          buttonText: 'Message Sent'
      })
    }

  } //end of class

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
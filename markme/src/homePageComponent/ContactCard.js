import React from 'react'
import "../css/contactCard.css"
class ContactCard extends React.Component{
    constructor(){
        super()
        this.state = {
            email : "",
            name : "",
            message : ""     
        }

        this.handleChange = this.handleChange.bind(this)    
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({ [name] : value })
    }

    handleSubmit(event){
        //code to send username and password to get validated
        event.preventDefault()
    }
    render(){
        return(
            <div id='contact-card' className ='contact-card'>
                <p className='contact-message'>Tell us how we can help you.</p>
                <form className="contact-form ui form gform" method="POST" action="https://script.google.com/macros/s/AKfycbwzVn8arZf96bWKTIvjYtc-GOPaavMyFo8AzE4lOlIo5GWBcYg/exec">
                    <div className="field">
                        <label>Name</label>
                        <div className="ui left icon input">
                            <input
                                type="text" 
                                placeholder="Enter Name"
                                name="name" 
                                value={this.state.name} 
                                onChange = {this.handleChange}
                            />
                            <i className="pencil alternate icon"></i>
                        </div>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <div className="ui left icon input">
                            <input
                                type="text" 
                                name="email" 
                                value={this.state.email} 
                                placeholder="Enter Email"
                                onChange = {this.handleChange}
                            />
                            <i className="envelope icon"></i>
                        </div>
                    </div>
                    <div className="field">
                        <label>Message</label>
                        <div className="ui left icon input">
                            <input
                                type="text"
                                name="message"
                                value={this.state.message}
                                placeholder="Enter Your Message"
                                onChange = {this.handleChange} 
                            />
                            <i className="terminal icon"></i>
                        </div>
                    </div>
                    <button className="ui orange submit button" style={{marginTop:'0.8em',width:'100%'}}>Send Message</button>
                    <div style={{display:'none'}} class="thankyou_message">
                    <h2><em>Thanks</em> for contacting us! We will get back to you soon!</h2>
                    </div>
                </form>

                <script data-cfasync="false" type="text/javascript" src="../Resources/scripts/form-submission-handler.js"></script>
            </div>
        )
    }
}

export default ContactCard
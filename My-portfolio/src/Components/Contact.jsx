import { useState, useEffect } from "react";

import "./Contact.css"

const Contact = () => {

    const [name, setName] = useState ("");
    const [email, setEmail] = useState ("");
    const [message, setMessage] = useState ("");


    const handleNameChange = (e) => {
        setName(e.target.value)
    };


    const submitinfo = (s) => {
        s.preventDefault();


        if (!name || !email || !message) {
            alert("Please fill all fields")
        } else {
            
            console.log(name, email, message)

            setName("")
            setEmail("")
            setMessage("")
        }
        
    }

    return(
        <div className="contact-form" id="contact-section">
            <div className="title">
                <h1>Get in Touch</h1>
                <p>Let's convert your ideas into successful projects</p>
            </div>
            
            <div className="down-part">
                <div className="talk">
                    <div className="contact-words">

                        <div className="contact-intro">
                            <h1 className="h1-contact">Contact Me</h1>
                            <p className="p-contact">You will be one step</p>
                            <p className="p-contact">closer to build your perfect project</p>
                        </div>

                        <div className="contact-icons">
                            <a className="icon1" href="https://www.instagram.com/ikristian2.0/">
                                <i className="fa-brands fa-instagram ig-icon"></i>
                            </a>
                            <a className="icon2" href="https://www.linkedin.com/feed/">
                                <i class="fa-brands fa-linkedin-in linkedin-icon"></i>
                            </a>
                            <a className="icon3" href="mailto:christianira2003@gmail.com">
                                <i className="fa-regular fa-envelope email-icon"></i>
                            </a>
                            <a className="icon4" href="https://wa.me/250798697759">
                                <i className="fa-brands fa-whatsapp whats-icon"></i>
                            </a>
    
                        </div>

                    </div>

                </div>
                
                <div className="info">
                    <form action="" onSubmit={submitinfo}>
                        
                        <input 
                            type="text"
                            name="name"
                            placeholder="Full Name" 
                            value={name} 
                            onChange={(e) => handleNameChange(e)}
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <textarea 
                        name="message" 
                        id="" 
                        placeholder="Your request" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)}>
                        </textarea>

                        <button className="submit-button">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
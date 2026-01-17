import emailjs from "@emailjs/browser";

// ✅ initialize EmailJS ONCE
emailjs.init("KSD9qQE1VqpulzCmU");

import { useState, useEffect } from "react";

import "./Contact.css"

const Contact = () => {

    const [name, setName] = useState ("");
    const [email, setEmail] = useState ("");
    const [message, setMessage] = useState ("");


    const handleNameChange = (e) => {
        setName(e.target.value)
    };


    const submitinfo = (e) => {
        
        e.preventDefault();

        const serviceId = 'service_5uuu4fr';
        const templateId = 'template_lkkxj8c';
        const publicKey = 'KSD9qQE1VqpulzCmU';

        const templateParams = {
            name:name,
            email:email,
            message:message
        };


        if (!name || !email || !message) {
            alert("Please fill all fields")
            return
            } 
        else {
            emailjs.send(serviceId, templateId, publicKey,templateParams)

            .then(()=>{
                alert("Message sent saccessfully!!")

                setName("")
                setEmail("")
                setMessage("")
            })

            .catch((error)=>{
                console.log(error)
                alert("Failed to send your message")
            })
            
            // console.log(name, email, message)


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
                                <i className="fa-brands fa-linkedin-in linkedin-icon"></i>
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
                            placeholder="What's your name?" 
                            value={name} 
                            onChange={(e) => handleNameChange(e)}
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email?" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <textarea 
                        name="message" 
                        id="" 
                        placeholder="Your request?" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)}>
                        </textarea>

                        <button className="submit-button" type="submit">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
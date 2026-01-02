import { useState, useEffect } from "react";

import "./Contact.css"

const Contact = () => {

    const [name, setName] = useState ("");
    const [email, setEmail] = useState ("");
    const [message, setMessage] = useState ("");

    const submitinfo = (s) => {
        s.preventDefault();

       return( 
            (!name || !email || !message)? 
            alert("Please fill all fields") : 
            
            console.log({name, email, message}),
            setName(""),
            setEmail(""),
            setMessage("")

            );
            
        
    }

    return(
        <div className="contact-form" id="contact">
            <div className="title">
                <h1>Get in Touch</h1>
                <p>Let's convert your ideas into successful projects</p>
            </div>
            
            <div className="down-part">
            <div className="talk">
                <div className="contact-words">
                    <h1>Contact Me</h1>
                    <p>You will be one step</p>
                    <p>closer to build your perfect project</p>

                    <div className="contact-icons">
                        <a className="icon1" href=""></a>
                        <a className="icon2" href=""></a>
                        <a className="icon3" href=""></a>
                        <a className="icon4" href=""></a>
 
                    </div>

                </div>

            </div>
            <div className="info">
                <form action="" onSubmit={submitinfo}>
                    <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <textarea name="" id="" placeholder="Your request" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button>Submit</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Contact;